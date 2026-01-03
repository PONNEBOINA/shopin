# Useful Commands Reference

## 📦 NPM Commands

```bash
# Install all dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Clean install (if issues occur)
rm -rf node_modules package-lock.json
npm install
```

## 🔧 Git Commands

```bash
# Initialize repository
git init

# Check status
git status

# Add all files
git add .

# Commit changes
git commit -m "Your commit message"

# Add remote repository
git remote add origin https://github.com/USERNAME/REPO.git

# Push to GitHub
git push -u origin main

# Pull latest changes
git pull

# View commit history
git log --oneline

# Create new branch
git checkout -b feature-name

# Switch branch
git checkout main

# View remote URL
git remote -v
```

## 🌐 Deployment Commands

### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

## 🧪 Testing Commands

```bash
# Test build locally
npm run build && npm start

# Check for errors
npm run lint

# Test HTML version (Python)
cd html-version
python -m http.server 8000

# Test HTML version (Node.js)
cd html-version
npx serve

# Check Node version
node --version

# Check npm version
npm --version
```

## 🔍 Debugging Commands

```bash
# Clear Next.js cache
rm -rf .next

# Clear all caches and reinstall
rm -rf .next node_modules package-lock.json
npm install

# Check for outdated packages
npm outdated

# Update packages
npm update

# Check for security vulnerabilities
npm audit

# Fix security vulnerabilities
npm audit fix
```

## 📱 Browser Testing

```bash
# Open in default browser (after npm run dev)
# Windows
start http://localhost:3000

# Mac
open http://localhost:3000

# Linux
xdg-open http://localhost:3000
```

## 🔧 Windows-Specific Commands

```bash
# Remove directory
rmdir /s /q node_modules

# Remove file
del package-lock.json

# List files
dir

# Change directory
cd folder-name

# Go back
cd ..

# Clear terminal
cls
```

## 🐧 Linux/Mac Commands

```bash
# Remove directory
rm -rf node_modules

# Remove file
rm package-lock.json

# List files
ls -la

# Change directory
cd folder-name

# Go back
cd ..

# Clear terminal
clear
```

## 📊 Performance Testing

```bash
# Build and analyze bundle size
npm run build

# Check build output
# Look for .next/static folder size
```

## 🔐 Environment Variables

```bash
# Create .env.local file
echo "NEXT_PUBLIC_API_URL=https://fakestoreapi.com" > .env.local

# View environment variables (Windows)
set

# View environment variables (Linux/Mac)
env
```

## 🚀 Quick Workflow

```bash
# Complete workflow from start to deployment

# 1. Install dependencies
npm install

# 2. Test locally
npm run dev
# Visit http://localhost:3000

# 3. Build for production
npm run build

# 4. Test production build
npm start

# 5. Initialize Git
git init
git add .
git commit -m "Initial commit"

# 6. Push to GitHub
git remote add origin YOUR_REPO_URL
git push -u origin main

# 7. Deploy to Vercel
vercel
```

## 🆘 Troubleshooting Commands

```bash
# Port already in use? Kill process
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001

# Check if API is accessible
curl https://fakestoreapi.com/products

# Test with different Node version (using nvm)
nvm use 18
npm install
npm run dev
```

## 📝 File Operations

```bash
# View file content
# Windows
type README.md

# Linux/Mac
cat README.md

# Search in files
# Windows
findstr "search-term" *.js

# Linux/Mac
grep -r "search-term" .

# Count lines of code
# Linux/Mac
find . -name "*.js" | xargs wc -l
```

## 🎯 Pre-Submission Checklist Commands

```bash
# 1. Ensure everything works
npm run build
npm start

# 2. Check for errors
npm run lint

# 3. Test HTML version
cd html-version
python -m http.server 8000
# Open http://localhost:8000

# 4. Verify Git status
git status

# 5. Push to GitHub
git push

# 6. Deploy
vercel
```

## 💡 Helpful Tips

```bash
# Create alias for common commands (Linux/Mac)
alias dev="npm run dev"
alias build="npm run build"

# Add to ~/.bashrc or ~/.zshrc

# Then use:
dev
build

# View package.json scripts
npm run

# Get help for any command
npm help
git help
vercel help
```

## 🔗 Quick Links

- Next.js Docs: https://nextjs.org/docs
- React Docs: https://react.dev
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Git Docs: https://git-scm.com/doc

---

**Pro Tip**: Save this file for quick reference! 📌
