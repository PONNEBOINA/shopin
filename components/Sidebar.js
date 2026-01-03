export default function Sidebar({ products, selectedCategory, setSelectedCategory, selectedFilters, setSelectedFilters }) {
  const categories = [...new Set(products.map(p => p.category))]
  
  const handleIdealForChange = (value) => {
    setSelectedFilters(prev => {
      const idealFor = prev.idealFor.includes(value)
        ? prev.idealFor.filter(item => item !== value)
        : [...prev.idealFor, value]
      return { ...prev, idealFor }
    })
  }

  const handleCustomizableChange = (e) => {
    setSelectedFilters(prev => ({
      ...prev,
      customizable: e.target.checked
    }))
  }

  const clearAllFilters = () => {
    setSelectedFilters({
      idealFor: [],
      customizable: false
    })
    setSelectedCategory('all')
  }
  
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-header">
          <input 
            type="checkbox" 
            id="customizable"
            checked={selectedFilters.customizable}
            onChange={handleCustomizableChange}
          />
          <label htmlFor="customizable">CUSTOMIZABLE</label>
        </div>
      </div>

      <div className="sidebar-divider"></div>

      <div className="sidebar-section">
        <details open>
          <summary className="sidebar-title">IDEAL FOR</summary>
          <div className="sidebar-content">
            <label className="filter-option" onClick={clearAllFilters} style={{ cursor: 'pointer' }}>
              All
            </label>
            <div className="filter-options">
              <label>
                <input 
                  type="checkbox" 
                  checked={selectedFilters.idealFor.includes('Men')}
                  onChange={() => handleIdealForChange('Men')}
                />
                <span>Men</span>
              </label>
              <label>
                <input 
                  type="checkbox"
                  checked={selectedFilters.idealFor.includes('Women')}
                  onChange={() => handleIdealForChange('Women')}
                />
                <span>Women</span>
              </label>
              <label>
                <input 
                  type="checkbox"
                  checked={selectedFilters.idealFor.includes('Electronics')}
                  onChange={() => handleIdealForChange('Electronics')}
                />
                <span>Electronics</span>
              </label>
              <label>
                <input 
                  type="checkbox"
                  checked={selectedFilters.idealFor.includes('Jewelry')}
                  onChange={() => handleIdealForChange('Jewelry')}
                />
                <span>Jewelry</span>
              </label>
            </div>
          </div>
        </details>
      </div>

      <div className="sidebar-divider"></div>

      <div className="sidebar-section">
        <details open>
          <summary className="sidebar-title">CATEGORY</summary>
          <div className="sidebar-content">
            <label className="filter-option" onClick={() => setSelectedCategory('all')} style={{ cursor: 'pointer' }}>
              All Categories
            </label>
            <div className="filter-options">
              {categories.map(category => (
                <label key={category}>
                  <input 
                    type="radio"
                    name="category"
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                  />
                  <span style={{ textTransform: 'capitalize' }}>{category}</span>
                </label>
              ))}
            </div>
          </div>
        </details>
      </div>

      <div className="sidebar-divider"></div>

      <div className="sidebar-section">
        <button 
          className="clear-filters-btn"
          onClick={clearAllFilters}
        >
          Clear All Filters
        </button>
      </div>
    </aside>
  )
}
