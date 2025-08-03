// =====================
// NETWORK+ SIMULATION GAME
// =====================

// Extend the namespace
window.ApexWarriorAcademy = window.ApexWarriorAcademy || {};

ApexWarriorAcademy.NetworkSimulator = {
    // Game state
    gameState: {
        currentScenario: 0,
        score: 0,
        devices: [],
        connections: [],
        isDragging: false,
        selectedDevice: null
    },

    // Device types
    deviceTypes: {
        router: {
            name: 'Router',
            icon: '🌐',
            description: 'Connects different networks',
            ports: 4,
            color: '#4CAF50'
        },
        switch: {
            name: 'Switch',
            icon: '🔌',
            description: 'Connects devices in same network',
            ports: 8,
            color: '#2196F3'
        },
        pc: {
            name: 'PC',
            icon: '💻',
            description: 'End device for users',
            ports: 1,
            color: '#FF9800'
        },
        server: {
            name: 'Server',
            icon: '🖥️',
            description: 'Provides network services',
            ports: 2,
            color: '#9C27B0'
        }
    },

    // Initialize the simulator
    init: function() {
        this.createGameInterface();
        // Wait a bit for DOM to be ready, then setup events
        setTimeout(() => {
            this.setupEventListeners();
        }, 100);
        this.loadScenario(0);
        console.log('Network Simulator initialized');
    },

    // Create the game interface
    createGameInterface: function() {
        const gameContainer = document.getElementById('network-simulator');
        if (!gameContainer) return;

        gameContainer.innerHTML = `
            <div class="simulator-header">
                <h3>🌐 Network+ Simulation Game</h3>
                <div class="simulator-controls">
                    <span class="score">Score: <span id="game-score">0</span></span>
                    <button id="reset-game" class="sim-btn">Reset</button>
                    <button id="check-network" class="sim-btn">Check Network</button>
                </div>
            </div>
            
            <div class="simulator-layout">
                <div class="device-palette">
                    <h4>📦 Available Devices</h4>
                    <div class="device-list">
                        <div class="device-item" data-type="router" draggable="true">
                            <span class="device-icon">🌐</span>
                            <span class="device-name">Router</span>
                        </div>
                        <div class="device-item" data-type="switch" draggable="true">
                            <span class="device-icon">🔌</span>
                            <span class="device-name">Switch</span>
                        </div>
                        <div class="device-item" data-type="pc" draggable="true">
                            <span class="device-icon">💻</span>
                            <span class="device-name">PC</span>
                        </div>
                        <div class="device-item" data-type="server" draggable="true">
                            <span class="device-icon">🖥️</span>
                            <span class="device-name">Server</span>
                        </div>
                    </div>
                </div>
                
                <div class="network-workspace">
                    <div class="workspace-header">
                        <h4>🏗️ Network Workspace</h4>
                        <p id="scenario-description">Drag devices here to build your network</p>
                    </div>
                    <div id="workspace" class="workspace-area">
                        <div class="workspace-placeholder">
                            <p>📥 Drag devices from the palette to start building</p>
                        </div>
                    </div>
                </div>
                
                <div class="network-info">
                    <h4>📊 Network Information</h4>
                    <div id="network-stats" class="network-stats">
                        <p>No devices placed yet</p>
                    </div>
                    <div class="connection-guide">
                        <h5>🔗 Connection Guide</h5>
                        <ul>
                            <li>Click on a device to select it (it will highlight)</li>
                            <li>Click on a second device to connect them</li>
                            <li>Both devices must be selected for connection</li>
                            <li>Valid connections will show in green</li>
                            <li>Invalid connections will show in red</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="scenario-info">
                <h4>🎯 Current Scenario</h4>
                <div id="scenario-details">
                    <p><strong>Objective:</strong> Build a basic office network</p>
                    <p><strong>Requirements:</strong> Connect 1 router, 1 switch, and 3 PCs</p>
                </div>
            </div>
        `;
    },

    // Setup event listeners
    setupEventListeners: function() {
        // Try immediate setup first
        this.setupDragAndDrop();
        this.setupControlButtons();
        
        // Also try with DOMContentLoaded as fallback
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                console.log('DOMContentLoaded - retrying setup');
                this.setupDragAndDrop();
                this.setupControlButtons();
            });
        }
    },

    // Setup drag and drop functionality
    setupDragAndDrop: function() {
        const deviceItems = document.querySelectorAll('.device-item');
        const workspace = document.getElementById('workspace');
        
        console.log('Found device items:', deviceItems.length);
        console.log('Found workspace:', workspace);
        
        // Setup device items for dragging
        deviceItems.forEach(item => {
            console.log('Setting up drag for:', item.dataset.type);
            item.addEventListener('dragstart', (e) => this.handleDragStart(e));
            item.addEventListener('dragend', (e) => this.handleDragEnd(e));
        });
        
        // Setup workspace for dropping
        if (workspace) {
            console.log('Setting up workspace drop events');
            workspace.addEventListener('dragover', (e) => this.handleDragOver(e));
            workspace.addEventListener('dragenter', (e) => this.handleDragEnter(e));
            workspace.addEventListener('dragleave', (e) => this.handleDragLeave(e));
            workspace.addEventListener('drop', (e) => this.handleDrop(e));
            workspace.addEventListener('click', (e) => this.handleWorkspaceClick(e));
        } else {
            console.error('Workspace element not found!');
        }
        
        // Add event delegation as backup (only if workspace events didn't work)
        if (!workspace) {
            document.addEventListener('dragover', (e) => {
                if (e.target.closest('#workspace')) {
                    this.handleDragOver(e);
                }
            });
            
            document.addEventListener('drop', (e) => {
                if (e.target.closest('#workspace')) {
                    this.handleDrop(e);
                }
            });
        }
    },

    // Setup control buttons
    setupControlButtons: function() {
        const resetBtn = document.getElementById('reset-game');
        const checkBtn = document.getElementById('check-network');
        
        if (resetBtn) resetBtn.addEventListener('click', () => this.resetGame());
        if (checkBtn) checkBtn.addEventListener('click', () => this.checkNetwork());
    },

    // Handle drag start
    handleDragStart: function(e) {
        const deviceType = e.target.dataset.type;
        e.dataTransfer.setData('text/plain', deviceType);
        e.target.style.opacity = '0.5';
    },

    // Handle drag over
    handleDragOver: function(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    },

    // Handle drag enter
    handleDragEnter: function(e) {
        e.preventDefault();
        const workspace = document.getElementById('workspace');
        workspace.classList.add('drag-over');
    },

    // Handle drag leave
    handleDragLeave: function(e) {
        e.preventDefault();
        const workspace = document.getElementById('workspace');
        workspace.classList.remove('drag-over');
    },

    // Handle drag end
    handleDragEnd: function(e) {
        e.preventDefault();
        const draggedItem = e.target;
        if (draggedItem) {
            draggedItem.style.opacity = '1';
        }
    },

    // Handle drop
    handleDrop: function(e) {
        e.preventDefault();
        console.log('Drop event triggered');
        
        const deviceType = e.dataTransfer.getData('text/plain');
        console.log('Device type:', deviceType);
        
        const workspace = document.getElementById('workspace');
        if (!workspace) {
            console.error('Workspace not found');
            return;
        }
        
        const rect = workspace.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        console.log('Drop position:', x, y);
        
        // Prevent duplicate drops by checking if this is a valid drop
        if (deviceType && this.deviceTypes[deviceType]) {
            this.addDevice(deviceType, x, y);
        }
        
        // Remove drag-over class
        workspace.classList.remove('drag-over');
        
        // Reset drag opacity
        const draggedItem = document.querySelector('.device-item[data-type="' + deviceType + '"]');
        if (draggedItem) draggedItem.style.opacity = '1';
    },

    // Add device to workspace
    addDevice: function(type, x, y) {
        const device = {
            id: 'device_' + Date.now(),
            type: type,
            x: x,
            y: y,
            connections: [],
            config: this.getDefaultConfig(type)
        };
        
        this.gameState.devices.push(device);
        this.renderDevice(device);
        this.updateNetworkStats();
        console.log('Device added:', type, 'Total devices:', this.gameState.devices.length);
    },

    // Render device on workspace
    renderDevice: function(device) {
        const workspace = document.getElementById('workspace');
        const deviceElement = document.createElement('div');
        deviceElement.className = 'network-device';
        deviceElement.id = device.id;
        deviceElement.style.left = device.x + 'px';
        deviceElement.style.top = device.y + 'px';
        deviceElement.style.backgroundColor = this.deviceTypes[device.type].color;
        
        deviceElement.innerHTML = `
            <div class="device-header">
                <span class="device-icon">${this.deviceTypes[device.type].icon}</span>
                <span class="device-name">${this.deviceTypes[device.type].name}</span>
            </div>
            <div class="device-ports">
                ${this.generatePorts(device.type)}
            </div>
            <div class="device-config">
                <small>${device.config.ip || 'Not configured'}</small>
            </div>
        `;
        
        deviceElement.addEventListener('click', (e) => this.selectDevice(device.id, e));
        workspace.appendChild(deviceElement);
        
        // Remove placeholder if it exists
        const placeholder = workspace.querySelector('.workspace-placeholder');
        if (placeholder) placeholder.remove();
    },

    // Generate ports for device
    generatePorts: function(deviceType) {
        const portCount = this.deviceTypes[deviceType].ports;
        let ports = '';
        for (let i = 0; i < portCount; i++) {
            ports += `<div class="port" data-port="${i}"></div>`;
        }
        return ports;
    },

    // Select device
    selectDevice: function(deviceId, event) {
        event.stopPropagation();
        console.log('Device clicked:', deviceId);
        
        // Check if this device is already selected
        const deviceElement = document.getElementById(deviceId);
        if (!deviceElement) return;
        
        if (deviceElement.classList.contains('selected')) {
            // Deselect if already selected
            deviceElement.classList.remove('selected');
            this.gameState.selectedDevice = null;
            console.log('Device deselected');
            return;
        }
        
        // Get currently selected devices before deselecting
        const currentlySelected = document.querySelectorAll('.network-device.selected');
        console.log('Currently selected devices:', currentlySelected.length);
        
        // If we already have one device selected, keep it and add this one
        if (currentlySelected.length === 1) {
            // Select this device (keep the other one selected)
            deviceElement.classList.add('selected');
            console.log('Second device selected:', deviceId);
            
            // Now we have two devices selected, attempt connection
            setTimeout(() => {
                this.attemptConnection(deviceId);
            }, 100);
        } else {
            // First device selection - deselect all others and select this one
            document.querySelectorAll('.network-device').forEach(dev => {
                dev.classList.remove('selected');
            });
            
            deviceElement.classList.add('selected');
            this.gameState.selectedDevice = deviceId;
            console.log('First device selected:', deviceId);
        }
    },

    // Attempt connection between devices
    attemptConnection: function(deviceId) {
        const selectedDevices = document.querySelectorAll('.network-device.selected');
        console.log('Attempting connection with', selectedDevices.length, 'selected devices');
        
        if (selectedDevices.length === 2) {
            const device1 = selectedDevices[0].id;
            const device2 = selectedDevices[1].id;
            
            console.log('Connecting devices:', device1, 'and', device2);
            
            if (device1 !== device2) {
                this.connectDevices(device1, device2);
            } else {
                console.log('Cannot connect device to itself');
            }
        }
    },

    // Connect two devices
    connectDevices: function(device1Id, device2Id) {
        console.log('Creating connection between:', device1Id, 'and', device2Id);
        
        const connection = {
            id: 'conn_' + Date.now(),
            device1: device1Id,
            device2: device2Id,
            valid: this.validateConnection(device1Id, device2Id)
        };
        
        console.log('Connection valid:', connection.valid);
        
        this.gameState.connections.push(connection);
        this.renderConnection(connection);
        this.updateScore(connection.valid ? 10 : -5);
        
        // Deselect devices
        document.querySelectorAll('.network-device').forEach(dev => {
            dev.classList.remove('selected');
        });
        this.gameState.selectedDevice = null;
        
        // Update stats after connection
        this.updateNetworkStats();
    },

    // Validate connection
    validateConnection: function(device1Id, device2Id) {
        const device1 = this.gameState.devices.find(d => d.id === device1Id);
        const device2 = this.gameState.devices.find(d => d.id === device2Id);
        
        if (!device1 || !device2) return false;
        
        // Basic validation rules
        if (device1.type === 'router' && device2.type === 'router') return true;
        if (device1.type === 'switch' && device2.type === 'switch') return true;
        if (device1.type === 'router' && device2.type === 'switch') return true;
        if (device1.type === 'switch' && device2.type === 'router') return true;
        if (device1.type === 'switch' && device2.type === 'pc') return true;
        if (device1.type === 'pc' && device2.type === 'switch') return true;
        if (device1.type === 'switch' && device2.type === 'server') return true;
        if (device1.type === 'server' && device2.type === 'switch') return true;
        
        return false;
    },

    // Render connection line
    renderConnection: function(connection) {
        const device1 = document.getElementById(connection.device1);
        const device2 = document.getElementById(connection.device2);
        
        if (!device1 || !device2) return;
        
        const workspace = document.getElementById('workspace');
        const line = document.createElement('div');
        line.className = 'connection-line ' + (connection.valid ? 'valid' : 'invalid');
        line.id = connection.id;
        
        // Calculate line position and angle
        const rect1 = device1.getBoundingClientRect();
        const rect2 = device2.getBoundingClientRect();
        const workspaceRect = workspace.getBoundingClientRect();
        
        const x1 = rect1.left + rect1.width/2 - workspaceRect.left;
        const y1 = rect1.top + rect1.height/2 - workspaceRect.top;
        const x2 = rect2.left + rect2.width/2 - workspaceRect.left;
        const y2 = rect2.top + rect2.height/2 - workspaceRect.top;
        
        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        
        line.style.width = length + 'px';
        line.style.left = x1 + 'px';
        line.style.top = y1 + 'px';
        line.style.transform = `rotate(${angle}deg)`;
        
        workspace.appendChild(line);
    },

    // Update score
    updateScore: function(points) {
        this.gameState.score += points;
        const scoreElement = document.getElementById('game-score');
        if (scoreElement) {
            scoreElement.textContent = this.gameState.score;
        }
    },

    // Update network statistics
    updateNetworkStats: function() {
        const statsElement = document.getElementById('network-stats');
        if (!statsElement) return;
        
        const deviceCounts = {};
        this.gameState.devices.forEach(device => {
            deviceCounts[device.type] = (deviceCounts[device.type] || 0) + 1;
        });
        
        let statsHTML = '<div class="stats-grid">';
        for (const [type, count] of Object.entries(deviceCounts)) {
            statsHTML += `
                <div class="stat-item">
                    <span class="stat-icon">${this.deviceTypes[type].icon}</span>
                    <span class="stat-count">${count}</span>
                    <span class="stat-name">${this.deviceTypes[type].name}</span>
                </div>
            `;
        }
        statsHTML += '</div>';
        
        statsHTML += `<p>Total Connections: ${this.gameState.connections.length}</p>`;
        statsHTML += `<p>Valid Connections: ${this.gameState.connections.filter(c => c.valid).length}</p>`;
        
        statsElement.innerHTML = statsHTML;
    },

    // Get default configuration for device
    getDefaultConfig: function(deviceType) {
        const configs = {
            router: { ip: '192.168.1.1', subnet: '255.255.255.0' },
            switch: { ip: '192.168.1.10', subnet: '255.255.255.0' },
            pc: { ip: '192.168.1.100', subnet: '255.255.255.0' },
            server: { ip: '192.168.1.50', subnet: '255.255.255.0' }
        };
        return configs[deviceType] || {};
    },

    // Check network validity
    checkNetwork: function() {
        const validConnections = this.gameState.connections.filter(c => c.valid).length;
        const totalConnections = this.gameState.connections.length;
        
        let message = '';
        if (validConnections === totalConnections && totalConnections > 0) {
            message = '✅ Great job! Your network is properly configured!';
            this.updateScore(50);
        } else if (totalConnections === 0) {
            message = '⚠️ No connections made yet. Try connecting some devices!';
        } else {
            message = `⚠️ ${totalConnections - validConnections} invalid connection(s). Check your network design!`;
        }
        
        this.showMessage(message);
    },

    // Show message to user
    showMessage: function(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'simulator-message';
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #333;
            color: white;
            padding: 15px;
            border-radius: 5px;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    },

    // Reset game
    resetGame: function() {
        this.gameState.devices = [];
        this.gameState.connections = [];
        this.gameState.score = 0;
        this.gameState.selectedDevice = null;
        
        const workspace = document.getElementById('workspace');
        if (workspace) {
            workspace.innerHTML = '<div class="workspace-placeholder"><p>📥 Drag devices from the palette to start building</p></div>';
        }
        
        this.updateNetworkStats();
        this.updateScore(0);
    },

    // Load scenario
    loadScenario: function(scenarioIndex) {
        this.gameState.currentScenario = scenarioIndex;
        // Future: Load different scenarios with specific objectives
    },

    // Handle workspace click
    handleWorkspaceClick: function(e) {
        if (e.target.id === 'workspace') {
            // Deselect all devices when clicking empty space
            document.querySelectorAll('.network-device').forEach(dev => {
                dev.classList.remove('selected');
            });
            this.gameState.selectedDevice = null;
        }
    },

    // Test function to manually add a device (for debugging)
    testAddDevice: function() {
        console.log('Testing device addition');
        this.addDevice('router', 100, 100);
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        ApexWarriorAcademy.NetworkSimulator.init();
    });
} else {
    ApexWarriorAcademy.NetworkSimulator.init();
} 