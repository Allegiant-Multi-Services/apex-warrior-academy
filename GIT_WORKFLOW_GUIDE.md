# Apex Warrior Academy - Git Workflow Guide
## Managing Your Website Content Changes

---

## 📋 Table of Contents
1. [Quick Start Guide](#quick-start-guide)
2. [Basic Git Workflow](#basic-git-workflow)
3. [Common Commands](#common-commands)
4. [Pro Tips](#pro-tips)
5. [Troubleshooting](#troubleshooting)
6. [Examples](#examples)

---

## 🚀 Quick Start Guide

### Essential Commands for Content Updates:
```bash
# 1. Check what changed
git status

# 2. Stage all changes
git add .

# 3. Commit with message
git commit -m "Your descriptive message here"

# 4. Push to live website
git push origin main
```

---

## 📝 Basic Git Workflow

### Step 1: Make Your Changes
- Edit HTML, CSS, or JavaScript files in your preferred editor
- Save your changes

### Step 2: Check What Changed
```bash
git status
```
**Output shows:**
- Modified files (in red)
- New files (in green)
- Deleted files

### Step 3: Stage Your Changes
```bash
# Stage all changes at once
git add .

# OR stage specific files
git add index.html
git add resources/design/style.css
git add resources/script/script.js
```

### Step 4: Commit Your Changes
```bash
git commit -m "Your descriptive commit message here"
```

**Good Commit Message Examples:**
- `"Update Security+ study materials with new flashcards"`
- `"Add new board preparation questions"`
- `"Fix typo in hero section title"`
- `"Update contact information in about page"`
- `"Add new video resource to Network+ page"`

### Step 5: Push to Live Website
```bash
git push origin main
```

---

## 🔧 Common Commands

### Viewing Changes
```bash
# See recent commits
git log --oneline

# See what changed in a specific file
git diff filename.html

# See changes in staged files
git diff --staged
```

### Managing Files
```bash
# Remove file from staging (but keep changes)
git reset filename.html

# Discard changes to a file (WARNING: permanent)
git checkout -- filename.html

# Add new file to tracking
git add newfile.html
```

### Working with Commits
```bash
# Undo last commit (keep changes staged)
git reset --soft HEAD~1

# Undo last commit (unstage changes)
git reset HEAD~1

# Undo last commit (discard changes - WARNING: permanent)
git reset --hard HEAD~1
```

### Syncing with Remote
```bash
# Pull latest changes from GitHub
git pull origin main

# Check remote status
git remote -v
```

---

## 💡 Pro Tips

### 1. Commit Messages
- **Be descriptive** - Explain what and why you changed
- **Use present tense** - "Add new content" not "Added new content"
- **Keep it concise** - Under 50 characters if possible
- **Start with action words** - Add, Update, Fix, Remove, etc.

### 2. Workflow Best Practices
- **Commit often** - Smaller, frequent commits are better
- **Test locally** - Open files in browser before pushing
- **Use `git status` frequently** - Keep track of your changes
- **Backup important changes** - Before major edits

### 3. File Organization
- **HTML files** - Main content pages
- **CSS files** - Styling (resources/design/style.css)
- **JavaScript files** - Functionality (resources/script/)
- **Images** - Store in resources/images/

---

## 🚨 Troubleshooting

### Common Issues and Solutions

#### Issue: "Changes not showing on website"
**Solution:**
```bash
# Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
# Or use hard refresh in browser
```

#### Issue: "Permission denied" when pushing
**Solution:**
```bash
# Check if you're logged into GitHub
# Ensure you have write access to the repository
```

#### Issue: "Merge conflicts"
**Solution:**
```bash
# Pull latest changes first
git pull origin main

# Resolve conflicts in your editor
# Then commit and push
git add .
git commit -m "Resolve merge conflicts"
git push origin main
```

#### Issue: "Accidentally committed wrong files"
**Solution:**
```bash
# Undo last commit but keep changes
git reset --soft HEAD~1

# Remove unwanted files from staging
git reset filename.html

# Re-commit with correct files
git add correctfile.html
git commit -m "Correct commit message"
```

---

## 📚 Examples

### Example 1: Adding New Content
```bash
# 1. Edit your HTML file
# 2. Check status
git status

# 3. Stage changes
git add index.html

# 4. Commit
git commit -m "Add new Security+ study resources section"

# 5. Push
git push origin main
```

### Example 2: Updating Multiple Files
```bash
# 1. Edit multiple files
# 2. Check what changed
git status

# 3. Stage all changes
git add .

# 4. Commit with descriptive message
git commit -m "Update all page titles and add new navigation links"

# 5. Push to live
git push origin main
```

### Example 3: Fixing a Typo
```bash
# 1. Fix typo in file
# 2. Check status
git status

# 3. Stage and commit
git add about.html
git commit -m "Fix typo in about page mission statement"

# 4. Push
git push origin main
```

---

## 🎯 Website File Structure

```
apex-warrior-academy-main/
├── index.html              # Homepage
├── securityplus.html       # Security+ page
├── networkplus.html        # Network+ page
├── blc.html               # BLC page
├── boardprep.html         # Board Prep page
├── about.html             # About page
├── resources/
│   ├── design/
│   │   └── style.css      # Main stylesheet
│   ├── script/
│   │   ├── script.js      # Main JavaScript
│   │   ├── auth.js        # Authentication
│   │   ├── performance.js # Performance optimization
│   │   └── analytics.js   # Analytics
│   └── images/
│       └── *.png, *.jpg   # Website images
└── README.md
```

---

## 🔄 Complete Workflow Summary

1. **Edit** → Make changes in your editor
2. **Check** → `git status` to see what changed
3. **Stage** → `git add .` to prepare changes
4. **Commit** → `git commit -m "message"` to save changes
5. **Push** → `git push origin main` to go live
6. **Test** → Check your website to confirm changes

---

## 📞 Need Help?

If you encounter issues:
1. Check this guide first
2. Use `git status` to understand the current state
3. Try the troubleshooting section above
4. Remember: You can always use `git reset --soft HEAD~1` to undo the last commit

---

**Remember: Your website updates automatically when you push to GitHub!** 🚀

*Last updated: [Current Date]*
*For: Apex Warrior Academy Website Management* 