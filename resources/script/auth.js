// =====================
// WEBSITE AUTHENTICATION
// =====================

class WebsiteAuth {
    constructor() {
        this.isAuthenticated = false;
        this.password = 'APEX2025'; // Change this to your desired password
        this.maxAttempts = 3;
        this.attempts = 0;
        this.lockoutTime = 5 * 60 * 1000; // 5 minutes in milliseconds
        this.lockoutUntil = 0;
        
        this.init();
    }

    init() {
        // Check if user is already authenticated
        const authStatus = localStorage.getItem('apexAuth');
        if (authStatus === 'authenticated') {
            this.isAuthenticated = true;
            this.showContent();
            return;
        }

        // Check if user is locked out
        const lockoutUntil = localStorage.getItem('apexLockoutUntil');
        if (lockoutUntil && Date.now() < parseInt(lockoutUntil)) {
            this.showLockoutScreen();
            return;
        }

        // Show login screen
        this.showLoginScreen();
    }

    showLoginScreen() {
        // Hide all content
        this.hideContent();

        // Create login overlay
        const overlay = document.createElement('div');
        overlay.id = 'auth-overlay';
        overlay.innerHTML = `
            <div class="auth-container">
                <div class="auth-box">
                    <div class="auth-header">
                        <img src="resources/images/apex_warrior_academy_transparent.png" alt="Apex Warrior Academy" class="auth-logo">
                        <h1>🔐 Access Restricted</h1>
                        <p>This website is restricted to authorized military personnel only.</p>
                    </div>
                    
                    <div class="auth-form">
                        <div class="input-group">
                            <label for="password-input">Enter Access Code:</label>
                            <input type="password" id="password-input" placeholder="Enter password" autocomplete="off">
                        </div>
                        
                        <button id="login-btn" class="auth-btn">🔓 Access Website</button>
                        
                        <div id="error-message" class="error-message" style="display: none;"></div>
                        
                        <div class="auth-info">
                            <p><strong>⚠️ Security Notice:</strong></p>
                            <p>This website contains sensitive military study materials. Access is restricted to authorized personnel only.</p>
                            <p>If you need access, contact your unit administrator.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        // Add event listeners
        const passwordInput = document.getElementById('password-input');
        const loginBtn = document.getElementById('login-btn');
        const errorMessage = document.getElementById('error-message');

        // Enter key to submit
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.attemptLogin();
            }
        });

        // Login button click
        loginBtn.addEventListener('click', () => {
            this.attemptLogin();
        });

        // Focus on password input
        passwordInput.focus();
    }

    attemptLogin() {
        const passwordInput = document.getElementById('password-input');
        const errorMessage = document.getElementById('error-message');
        const loginBtn = document.getElementById('login-btn');

        const enteredPassword = passwordInput.value.trim();

        if (!enteredPassword) {
            this.showError('Please enter the access code.');
            return;
        }

        // Check if locked out
        if (this.attempts >= this.maxAttempts) {
            const remainingTime = Math.ceil((this.lockoutUntil - Date.now()) / 1000 / 60);
            this.showError(`Too many failed attempts. Please wait ${remainingTime} minutes before trying again.`);
            return;
        }

        // Check password
        if (enteredPassword === this.password) {
            // Success
            this.isAuthenticated = true;
            localStorage.setItem('apexAuth', 'authenticated');
            this.showContent();
            this.removeAuthOverlay();
        } else {
            // Failed attempt
            this.attempts++;
            const remainingAttempts = this.maxAttempts - this.attempts;
            
            if (this.attempts >= this.maxAttempts) {
                // Lock out user
                this.lockoutUntil = Date.now() + this.lockoutTime;
                localStorage.setItem('apexLockoutUntil', this.lockoutUntil.toString());
                this.showError(`Too many failed attempts. Please wait 5 minutes before trying again.`);
                loginBtn.disabled = true;
                passwordInput.disabled = true;
                
                // Re-enable after lockout period
                setTimeout(() => {
                    this.resetAttempts();
                    this.showLoginScreen();
                }, this.lockoutTime);
            } else {
                this.showError(`Incorrect access code. ${remainingAttempts} attempts remaining.`);
                passwordInput.value = '';
                passwordInput.focus();
            }
        }
    }

    showError(message) {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    }

    resetAttempts() {
        this.attempts = 0;
        this.lockoutUntil = 0;
        localStorage.removeItem('apexLockoutUntil');
    }

    showLockoutScreen() {
        this.hideContent();

        const overlay = document.createElement('div');
        overlay.id = 'auth-overlay';
        overlay.innerHTML = `
            <div class="auth-container">
                <div class="auth-box">
                    <div class="auth-header">
                        <h1>🚫 Access Temporarily Blocked</h1>
                        <p>Too many failed login attempts.</p>
                    </div>
                    
                    <div class="auth-form">
                        <div class="lockout-message">
                            <p>For security reasons, access has been temporarily blocked.</p>
                            <p>Please wait 5 minutes before attempting to log in again.</p>
                            <div id="countdown" class="countdown"></div>
                        </div>
                        
                        <button id="retry-btn" class="auth-btn" disabled>🔓 Try Again</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        // Countdown timer
        this.startCountdown();
    }

    startCountdown() {
        const countdownElement = document.getElementById('countdown');
        const retryBtn = document.getElementById('retry-btn');
        
        const updateCountdown = () => {
            const remaining = Math.ceil((this.lockoutUntil - Date.now()) / 1000);
            
            if (remaining <= 0) {
                countdownElement.textContent = 'Access restored!';
                retryBtn.disabled = false;
                retryBtn.textContent = '🔓 Try Again';
                
                retryBtn.addEventListener('click', () => {
                    this.resetAttempts();
                    this.showLoginScreen();
                });
            } else {
                const minutes = Math.floor(remaining / 60);
                const seconds = remaining % 60;
                countdownElement.textContent = `Time remaining: ${minutes}:${seconds.toString().padStart(2, '0')}`;
                setTimeout(updateCountdown, 1000);
            }
        };
        
        updateCountdown();
    }

    hideContent() {
        // Hide main content
        const main = document.querySelector('main');
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        
        if (main) main.style.display = 'none';
        if (header) header.style.display = 'none';
        if (footer) footer.style.display = 'none';
    }

    showContent() {
        // Show main content
        const main = document.querySelector('main');
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        
        if (main) main.style.display = 'block';
        if (header) header.style.display = 'block';
        if (footer) footer.style.display = 'block';
    }

    removeAuthOverlay() {
        const overlay = document.getElementById('auth-overlay');
        if (overlay) {
            overlay.remove();
        }
    }

    logout() {
        this.isAuthenticated = false;
        localStorage.removeItem('apexAuth');
        this.showLoginScreen();
    }
}

// Initialize authentication when page loads
document.addEventListener('DOMContentLoaded', function() {
    new WebsiteAuth();
}); 