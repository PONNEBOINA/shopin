# GitHub Setup and Deployment Guide

## Step 1: Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit: Premium Products Landing Page"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it: `premium-products-landing-page` (or your preferred name)
5. Keep it public
6. Don't initialize with README (we already have one)
7. Click "Create repository"

## Step 3: Push to GitHub

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub username and repository name.

## Step 4: Deploy to Vercel (Recommended for Next.js SSR)

### Method 1: Using Vercel Website

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js
6. Click "Deploy"
7. Wait 1-2 minutes
8. Your site is live! 🎉

### Method 2: Using Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts and your site will be deployed.

## Step 5: Deploy to Netlify (Alternative)

### For Next.js Version:

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

### For HTML Version Only:

1. Same steps as above, but:
   - Build command: (leave empty)
   - Publish directory: `html-version`

## Step 6: Get Your Live URLs

After deployment, you'll receive URLs like:
- **Vercel**: `https://your-project.vercel.app`
- **Netlify**: `https://your-project.netlify.app`

## Step 7: Submit Your Work

Fill out the submission form: https://forms.ccbp.in/react-assignment-submissions1

**Required Information**:
1. **Live URL**: Your Vercel/Netlify URL
2. **GitHub Repository**: `https://github.com/YOUR-USERNAME/YOUR-REPO-NAME`
3. Your name and email

## Troubleshooting

### Git Issues

**Problem**: "fatal: not a git repository"
```bash
git init
```

**Problem**: "remote origin already exists"
```bash
git remote remove origin
git remote add origin YOUR-REPO-URL
```

### Build Issues

**Problem**: Build fails on Vercel/Netlify
- Check Node.js version (should be 18+)
- Verify package.json is correct
- Check build logs for specific errors

### API Issues

**Problem**: Products not loading
- Check browser console for errors
- Verify API endpoint: https://fakestoreapi.com/products
- Check CORS settings

## Quick Commands Reference

```bash
# Check git status
git status

# Add all files
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push

# Pull latest changes
git pull

# View remote URL
git remote -v

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Testing Before Deployment

1. **Test locally**:
   ```bash
   npm run build
   npm start
   ```
   Visit http://localhost:3000

2. **Test HTML version**:
   - Open `html-version/index.html` in browser
   - Or use: `cd html-version && python -m http.server 8000`

3. **Check responsiveness**:
   - Open browser DevTools (F12)
   - Toggle device toolbar
   - Test mobile, tablet, desktop views

4. **Verify SEO**:
   - Right-click → View Page Source
   - Check for meta tags, H1/H2 tags
   - Verify schema markup

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Docs](https://vercel.com/docs)
- [Netlify Deployment Docs](https://docs.netlify.com)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

## Need Help?

If you encounter issues:
1. Check the error message carefully
2. Search for the error on Google/Stack Overflow
3. Review the documentation links above
4. Check your build logs on Vercel/Netlify

---

Good luck with your submission! 🚀
