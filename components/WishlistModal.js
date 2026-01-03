import { useEffect, useState } from 'react'

export default function WishlistModal({ isOpen, onClose, products }) {
  const [favorites, setFavorites] = useState([])
  const [wishlistProducts, setWishlistProducts] = useState([])

  useEffect(() => {
    if (isOpen) {
      const favIds = JSON.parse(localStorage.getItem('favorites') || '[]')
      setFavorites(favIds)
      const favProducts = products.filter(p => favIds.includes(p.id))
      setWishlistProducts(favProducts)
    }
  }, [isOpen, products])

  const removeFromWishlist = (productId) => {
    const newFavorites = favorites.filter(id => id !== productId)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
    setFavorites(newFavorites)
    setWishlistProducts(wishlistProducts.filter(p => p.id !== productId))
    
    // Dispatch event to update all product cards
    window.dispatchEvent(new Event('wishlistUpdate'))
    
    // Force re-render of product cards by dispatching storage event
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'favorites',
      newValue: JSON.stringify(newFavorites)
    }))
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            My Wishlist {wishlistProducts.length > 0 && `(${wishlistProducts.length})`}
          </h2>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="modal-body">
          {wishlistProducts.length === 0 ? (
            <div className="empty-wishlist">
              <div className="empty-icon">❤️</div>
              <h3>Your wishlist is empty</h3>
              <p>Start adding products you love!</p>
              <button className="browse-btn" onClick={onClose}>
                Browse Products
              </button>
            </div>
          ) : (
            <div className="wishlist-grid">
              {wishlistProducts.map(product => (
                <article key={product.id} className="wishlist-item">
                  <div className="wishlist-item-image">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="wishlist-item-info">
                    <h3 className="wishlist-item-title">{product.title}</h3>
                    <p className="wishlist-item-category">{product.category}</p>
                    <div className="wishlist-item-footer">
                      <span className="wishlist-item-price">${product.price}</span>
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromWishlist(product.id)}
                        aria-label="Remove from wishlist"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
