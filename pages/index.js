import Head from 'next/head'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ProductGrid from '../components/ProductGrid'
import Footer from '../components/Footer'
import fallbackProducts from '../data/productsFallback'
import { useState, useEffect } from 'react'

export default function Home({ products }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedFilters, setSelectedFilters] = useState({
    idealFor: [],
    customizable: false
  })
  const [sortBy, setSortBy] = useState('recommended')
  const [showSidebar, setShowSidebar] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [wishlistCount, setWishlistCount] = useState(0)

  // Update wishlist count on mount and when favorites change
  useEffect(() => {
    const updateWishlistCount = () => {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
      setWishlistCount(favorites.length)
    }
    
    updateWishlistCount()
    
    // Listen for storage changes
    window.addEventListener('storage', updateWishlistCount)
    window.addEventListener('wishlistUpdate', updateWishlistCount)
    
    return () => {
      window.removeEventListener('storage', updateWishlistCount)
      window.removeEventListener('wishlistUpdate', updateWishlistCount)
    }
  }, [])

  // Filter products
  let filteredProducts = products.filter(product => {
    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      const matchesSearch = product.title.toLowerCase().includes(query) ||
                           product.description.toLowerCase().includes(query) ||
                           product.category.toLowerCase().includes(query)
      if (!matchesSearch) return false
    }
    
    // Category filter
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false
    }
    
    // Ideal For filter (based on category)
    if (selectedFilters.idealFor.length > 0) {
      const categoryMap = {
        'Men': ["men's clothing"],
        'Women': ["women's clothing"],
        'Electronics': ['electronics'],
        'Jewelry': ['jewelery']
      }
      
      let matchesIdealFor = false
      selectedFilters.idealFor.forEach(filter => {
        if (categoryMap[filter] && categoryMap[filter].includes(product.category)) {
          matchesIdealFor = true
        }
      })
      
      if (!matchesIdealFor) return false
    }
    
    return true
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'newest':
        return b.id - a.id
      case 'popular':
        return (b.rating?.count || 0) - (a.rating?.count || 0)
      case 'recommended':
      default:
        return (b.rating?.rate || 0) - (a.rating?.rate || 0)
    }
  })

  return (
    <>
      <Head>
        <title>Premium Products Store - Shop Quality Items Online</title>
        <meta name="description" content="Discover our curated collection of premium products including electronics, jewelry, and fashion. Shop quality items with fast shipping and great prices." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Premium Products Store" />
        <meta property="og:description" content="Shop quality products online" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Premium Products Store",
              "description": "Online store for premium products",
              "url": typeof window !== 'undefined' ? window.location.origin : '',
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": products.map((product, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Product",
                  "name": product.title,
                  "description": product.description,
                  "image": product.image,
                  "offers": {
                    "@type": "Offer",
                    "price": product.price,
                    "priceCurrency": "USD"
                  }
                }
              }))
            })
          }}
        />
      </Head>
      <Navbar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        wishlistCount={wishlistCount}
        onShowWishlist={() => alert('Wishlist feature - ' + wishlistCount + ' items saved!')}
      />
      <main className="main-container">
        <section className="hero-banner">
          <div className="hero-content">
            <h1 className="hero-title">DISCOVER OUR PRODUCTS</h1>
            <p className="hero-description">
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. 
              Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </p>
          </div>
        </section>
        <div className={`content-wrapper ${!showSidebar ? 'sidebar-hidden' : ''}`}>
          {showSidebar && (
            <Sidebar 
              products={products}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          )}
          <ProductGrid 
            products={sortedProducts} 
            totalCount={products.length}
            sortBy={sortBy}
            setSortBy={setSortBy}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  let remoteProducts = []

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 7000)

    const res = await fetch('https://fakestoreapi.com/products', {
      signal: controller.signal,
      cache: 'no-store',
    })

    clearTimeout(timeout)

    if (!res.ok) {
      throw new Error(`FakeStore API responded with ${res.status}`)
    }

    const data = await res.json()
    remoteProducts = Array.isArray(data) ? data : []
  } catch (error) {
    console.error('Error fetching products, using fallback data:', error)
  }

  const baseProducts = remoteProducts.length ? remoteProducts : fallbackProducts
  const expandedProducts = [...baseProducts]

  baseProducts.slice(0, 10).forEach((product, index) => {
    const priceValue =
      typeof product.price === 'number'
        ? product.price
        : Number.parseFloat(product.price) || 0

    expandedProducts.push({
      ...product,
      id: baseProducts.length + index + 1,
      title: `${product.title} - Premium Edition`,
      price: Number((priceValue * 1.2).toFixed(2)),
    })
  })

  return {
    props: {
      products: expandedProducts,
    },
  }
}
