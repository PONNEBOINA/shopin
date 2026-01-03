# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
Visit: http://localhost:3000

---

## 📁 Project Structure

```
├── components/              # React components
│   ├── ProductCard.js      # Individual product card
│   └── ProductGrid.js      # Products grid layout
├── pages/                  # Next.js pages (SSR)
│   ├── index.js           # Main landing page
│   ├── _app.js            # App wrapper
│   └── _document.js       # HTML document
├── styles/                 # CSS files
│   └── globals.css        # Global styles
├── html-version/          # Pure HTML/CSS version
│   ├── index.html         # HTML structure
│   ├── styles.css         # Styling
│   └── script.js          # Vanilla JS
└── public/                # Static files
```

---

## 🎯 Key Features Implemented

✅ **Server-Side Rendering (SSR)** - Using Next.js getServerSideProps  
✅ **Responsive Design** - Mobile, Tablet, Desktop  
✅ **SEO Optimized** - Meta tags, Schema markup, H1/H2 tags  
✅ **Mock API Integration** - FakeStore API  
✅ **Pure HTML/CSS Version** - In html-version folder  
✅ **Clean Code** - Proper naming, minimal dependencies  
✅ **Performance** - Minimal DOM, lazy loading  

---

## 🛠️ Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Push to GitHub
2. Connect repo to Netlify
3. Build: `npm run build`
4. Publish: `.next`

---

## 📱 Test Responsive Design

1. Open http://localhost:3000
2. Press F12 (DevTools)
3. Click device toolbar icon
4. Test different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1200px

---

## ✅ Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test on mobile view
- [ ] Test on tablet view
- [ ] Verify API loads products
- [ ] Check SEO meta tags (view source)
- [ ] Test HTML version (html-version/index.html)
- [ ] Push to GitHub
- [ ] Deploy to Vercel/Netlify
- [ ] Submit form with live URL

---

## 📝 Submission

**Form**: https://forms.ccbp.in/react-assignment-submissions1

**Required**:
1. Live URL (Vercel/Netlify)
2. GitHub Repository URL

---

## 🆘 Common Issues

**Issue**: npm install fails  
**Fix**: Use Node.js 18+ (`node --version`)

**Issue**: Port 3000 already in use  
**Fix**: Kill process or use different port: `npm run dev -- -p 3001`

**Issue**: Products not loading  
**Fix**: Check internet connection, API might be down

**Issue**: Build fails  
**Fix**: Delete `.next` and `node_modules`, run `npm install` again

---

## 📚 Documentation

- Full README: `README.md`
- Deployment Guide: `DEPLOYMENT.md`
- GitHub Setup: `GITHUB_SETUP.md`
- Submission Details: `SUBMISSION.md`

---

**Need help?** Check the detailed guides above! 🎉
