# Premium Products Landing Page

A modern, responsive e-commerce landing page built with Next.js featuring Server-Side Rendering (SSR) and SEO optimization.

## Features

- ✅ Server-Side Rendering (SSR) with Next.js
- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ SEO optimized with meta tags and Schema.org markup
- ✅ Mock API integration (FakeStore API)
- ✅ Clean code structure and naming conventions
- ✅ Minimal DOM size for performance
- ✅ Pure CSS styling (no CSS frameworks)
- ✅ Accessible with proper ARIA labels and alt text

## Tech Stack

- **Framework**: Next.js 14 (React with SSR)
- **Styling**: Pure CSS
- **API**: FakeStore API (https://fakestoreapi.com/products)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd product-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── components/
│   ├── ProductCard.js      # Individual product card component
│   └── ProductGrid.js      # Grid layout for products
├── pages/
│   ├── _app.js            # App wrapper
│   ├── _document.js       # HTML document structure
│   └── index.js           # Main landing page with SSR
├── styles/
│   └── globals.css        # Global styles and responsive design
├── public/
│   └── robots.txt         # SEO robots file
└── next.config.js         # Next.js configuration

```

## SEO Implementation

- **Page Title**: Descriptive and keyword-rich
- **Meta Description**: Compelling description for search results
- **H1 & H2 Tags**: Proper heading hierarchy
- **Schema Markup**: WebSite and ItemList schemas
- **Image SEO**: Alt text and descriptive names
- **Semantic HTML**: Proper use of article, section, header tags

## Responsive Design

- **Desktop**: Multi-column grid layout
- **Tablet**: Adjusted grid with 2-3 columns
- **Mobile**: Single column layout with optimized spacing

## Deployment

### Deploy to Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Performance Optimizations

- Server-Side Rendering for faster initial load
- Image lazy loading
- Minimal JavaScript bundle
- Optimized CSS with no external frameworks
- Efficient DOM structure

## Code Quality

- Clean and organized file structure
- Consistent naming conventions (camelCase for JS, kebab-case for CSS)
- Minimal use of external packages
- Semantic HTML elements
- Accessible components

## License

MIT

## Author

Your Name
