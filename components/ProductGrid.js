import ProductCard from './ProductCard'

export default function ProductGrid({ products, totalCount, sortBy, setSortBy, showSidebar, setShowSidebar }) {
  return (
    <section className="products-section">
      <div className="products-header">
        <div className="products-info">
          <h2 className="products-count">{products.length} ITEMS</h2>
          <button 
            className="filter-toggle"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <span className="filter-icon">{showSidebar ? '◀' : '▶'}</span> 
            {showSidebar ? 'HIDE FILTER' : 'SHOW FILTER'}
          </button>
        </div>
        <div className="products-sort">
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="recommended">RECOMMENDED</option>
            <option value="newest">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="price-high">PRICE: HIGH TO LOW</option>
            <option value="price-low">PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>
      {products.length === 0 ? (
        <div className="no-products">
          <p>No products found matching your filters.</p>
          <p>Try adjusting your filter selections.</p>
        </div>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}
