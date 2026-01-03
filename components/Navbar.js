import { useState } from 'react'

export default function Navbar({ searchQuery, setSearchQuery, wishlistCount, onShowWishlist }) {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="menu-toggle" aria-label="Toggle menu">
          ☰
        </button>
        <div className="navbar-logo">
          <span className="logo-text">LOGO</span>
        </div>
        <ul className="navbar-menu">
          <li><a href="#shop">SHOP</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#stories">STORIES</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>
        <div className="navbar-icons">
          <button 
            aria-label="Search"
            onClick={() => setShowSearch(!showSearch)}
            className={showSearch ? 'active' : ''}
          >
            🔍
          </button>
          <button 
            aria-label="Wishlist" 
            className="wishlist-icon"
            onClick={onShowWishlist}
          >
            ❤️
            {wishlistCount > 0 && (
              <span className="wishlist-badge">{wishlistCount}</span>
            )}
          </button>
          <button aria-label="Shopping bag">🛍️</button>
          <button aria-label="User account">👤</button>
          <button aria-label="Language">ENG</button>
        </div>
      </div>
      {showSearch && (
        <div className="search-bar">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              autoFocus
            />
            {searchQuery && (
              <button 
                className="search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
