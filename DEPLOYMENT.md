# Deployment Guide

## Option 1: Deploy Next.js App to Vercel (Recommended for SSR)

Vercel is the best platform for Next.js apps with built-in SSR support.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Your app will be live at**: `https://your-project.vercel.app`

## Option 2: Deploy to Netlify

### For Next.js App:

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Install command: `npm install`

2. **Add netlify.toml**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

3. **Deploy**
   - Push to GitHub
   - Connect repository to Netlify
   - Deploy

### For HTML Version:

1. **Build Settings**
   - Build command: (leave empty)
   - Publish directory: `html-version`

2. **Deploy**
   - Push to GitHub
   - Connect repository to Netlify
   - Deploy

## Option 3: Deploy HTML Version to GitHub Pages

1. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages
   - Select branch and `/html-version` folder
   - Save

2. **Your site will be live at**: `https://username.github.io/repo-name/`

## Testing Locally

### Next.js App:
```bash
npm install
npm run dev
# Visit http://localhost:3000
```

### HTML Version:
```bash
cd html-version
# Use any local server, e.g.:
python -m http.server 8000
# Or use VS Code Live Server extension
```

## Environment Variables (if needed)

Create `.env.local` file:
```
NEXT_PUBLIC_API_URL=https://fakestoreapi.com
```

## Post-Deployment Checklist

- [ ] Test on mobile devices
- [ ] Test on tablet devices
- [ ] Verify SEO meta tags (use view-source)
- [ ] Check page load speed (Google PageSpeed Insights)
- [ ] Verify API integration works
- [ ] Test all responsive breakpoints
- [ ] Validate HTML (W3C Validator)
- [ ] Check accessibility (WAVE tool)

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Clear cache: `rm -rf .next node_modules && npm install`

### API Not Loading
- Check CORS settings
- Verify API endpoint is accessible
- Check browser console for errors

### Images Not Loading
- Verify image URLs are correct
- Check Next.js image domains in next.config.js
