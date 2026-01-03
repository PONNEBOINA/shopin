import { useState, useEffect } from 'react'

export default function ProductCard({ product, onWishlistChange }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const imageAlt = `${product.title} - ${product.category}`
  
  // Load favorite status from localStorage on mount
  useEffect(() => {
    const updateFavoriteStatus = () => {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
      setIsFavorite(favorites.includes(product.id))
    }
    
    updateFavoriteStatus()
    
    // Listen for wishlist updates
    window.addEventListener('wishlistUpdate', updateFavoriteStatus)
    window.addEventListener('storage', updateFavoriteStatus)
    
    return () => {
      window.removeEventListener('wishlistUpdate', updateFavoriteStatus)
      window.removeEventListener('storage', updateFavoriteStatus)
    }
  }, [product.id])
  
  // Toggle favorite status
  const toggleFavorite = (e) => {
    e.preventDefault()
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    
    if (isFavorite) {
      // Remove from favorites
      const newFavorites = favorites.filter(id => id !== product.id)
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
      setIsFavorite(false)
    } else {
      // Add to favorites
      favorites.push(product.id)
      localStorage.setItem('favorites', JSON.stringify(favorites))
      setIsFavorite(true)
    }
    
    // Dispatch custom event to update navbar count
    window.dispatchEvent(new Event('wishlistUpdate'))
    if (onWishlistChange) onWishlistChange()
  }
  
  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img 
          src={product.image} 
          alt={imageAlt}
          className="product-image"
          loading="lazy"
        />
        <button 
          className={`wishlist-btn ${isFavorite ? 'active' : ''}`}
          onClick={toggleFavorite}
          aria-label={isFavorite ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-meta">
          <a href="#signin" className="signin-link">Sign in</a>
          <span> or </span>
          <a href="#create" className="create-link">Create an account</a>
          <span> to see pricing</span>
        </div>
      </div>
    </article>
  )
}
