// State management
let allProducts = [];
let filteredProducts = [];
let selectedFilters = {
  idealFor: [],
  customizable: false
};
let sortBy = 'recommended';
let showSidebar = true;
let searchQuery = '';
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

// Update wishlist count
function updateWishlistCount() {
  favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  const badge = document.getElementById('wishlist-count');
  if (favorites.length > 0) {
    badge.textContent = favorites.length;
    badge.style.display = 'block';
  } else {
    badge.style.display = 'none';
  }
}

// Fetch products from FakeStore API
async function fetchProducts() {
  const container = document.getElementById('products-container');
  const itemCount = document.getElementById('item-count');
  container.innerHTML = '<div class="loading">Loading products...</div>';

  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    
    // Expand products by adding variations
    allProducts = [...products];
    
    // Add more product variations
    products.forEach((product, index) => {
      if (index < 10) {
        allProducts.push({
          ...product,
          id: products.length + index + 1,
          title: `${product.title} - Premium Edition`,
          price: (product.price * 1.2).toFixed(2)
        });
      }
    });
    
    filteredProducts = [...allProducts];
    itemCount.textContent = `${filteredProducts.length} ITEMS`;
    displayProducts(filteredProducts);
    setupEventListeners();
    updateWishlistCount();
  } catch (error) {
    container.innerHTML = '<div class="loading">Failed to load products. Please try again later.</div>';
    console.error('Error fetching products:', error);
  }
}

// Setup event listeners
function setupEventListeners() {
  // Wishlist modal
  document.getElementById('wishlist-btn').addEventListener('click', showWishlistModal);
  document.getElementById('close-wishlist').addEventListener('click', closeWishlistModal);
  document.getElementById('wishlist-modal').addEventListener('click', closeWishlistModal);

  // Search toggle
  document.getElementById('search-toggle').addEventListener('click', () => {
    const searchBar = document.getElementById('search-bar');
    const isVisible = searchBar.style.display !== 'none';
    searchBar.style.display = isVisible ? 'none' : 'block';
    if (!isVisible) {
      document.getElementById('search-input').focus();
    }
  });

  // Search input
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');
  
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    searchClear.style.display = searchQuery ? 'block' : 'none';
    applyFiltersAndSort();
  });

  searchClear.addEventListener('click', () => {
    searchQuery = '';
    searchInput.value = '';
    searchClear.style.display = 'none';
    applyFiltersAndSort();
  });

  // Sort dropdown
  document.getElementById('sort-select').addEventListener('change', (e) => {
    sortBy = e.target.value;
    applyFiltersAndSort();
  });

  // Filter toggle
  document.getElementById('filter-toggle').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    const wrapper = document.getElementById('content-wrapper');
    showSidebar = !showSidebar;
    
    if (showSidebar) {
      sidebar.style.display = 'block';
      wrapper.classList.remove('sidebar-hidden');
    } else {
      sidebar.style.display = 'none';
      wrapper.classList.add('sidebar-hidden');
    }
    
    document.getElementById('filter-toggle').innerHTML = `
      <span class="filter-icon">${showSidebar ? '◀' : '▶'}</span> 
      ${showSidebar ? 'HIDE FILTER' : 'SHOW FILTER'}
    `;
  });

  // Ideal For checkboxes
  document.querySelectorAll('.ideal-for-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const value = e.target.value;
      if (e.target.checked) {
        selectedFilters.idealFor.push(value);
      } else {
        selectedFilters.idealFor = selectedFilters.idealFor.filter(item => item !== value);
      }
      applyFiltersAndSort();
    });
  });

  // Customizable checkbox
  document.getElementById('customizable').addEventListener('change', (e) => {
    selectedFilters.customizable = e.target.checked;
    applyFiltersAndSort();
  });

  // Clear filters
  document.getElementById('clear-filters').addEventListener('click', () => {
    selectedFilters = {
      idealFor: [],
      customizable: false
    };
    document.querySelectorAll('.ideal-for-checkbox').forEach(cb => cb.checked = false);
    document.getElementById('customizable').checked = false;
    applyFiltersAndSort();
  });
}

// Toggle favorite
function toggleFavorite(productId, button) {
  if (favorites.includes(productId)) {
    favorites = favorites.filter(id => id !== productId);
    button.classList.remove('active');
    button.textContent = '🤍';
  } else {
    favorites.push(productId);
    button.classList.add('active');
    button.textContent = '❤️';
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
  updateWishlistCount();
}

// Apply filters and sorting
function applyFiltersAndSort() {
  // Filter products
  filteredProducts = allProducts.filter(product => {
    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchesSearch = product.title.toLowerCase().includes(query) ||
                           product.description.toLowerCase().includes(query) ||
                           product.category.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }
    
    // Ideal For filter
    if (selectedFilters.idealFor.length > 0) {
      const categoryMap = {
        'Men': ["men's clothing"],
        'Women': ["women's clothing"],
        'Electronics': ['electronics'],
        'Jewelry': ['jewelery']
      };
      
      let matchesIdealFor = false;
      selectedFilters.idealFor.forEach(filter => {
        if (categoryMap[filter] && categoryMap[filter].includes(product.category)) {
          matchesIdealFor = true;
        }
      });
      
      if (!matchesIdealFor) return false;
    }
    
    return true;
  });

  // Sort products
  filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return b.id - a.id;
      case 'popular':
        return (b.rating?.count || 0) - (a.rating?.count || 0);
      case 'recommended':
      default:
        return (b.rating?.rate || 0) - (a.rating?.rate || 0);
    }
  });

  // Update display
  document.getElementById('item-count').textContent = `${filteredProducts.length} ITEMS`;
  displayProducts(filteredProducts);
}

// Display products in grid
function displayProducts(products) {
  const container = document.getElementById('products-container');
  
  if (products.length === 0) {
    container.innerHTML = `
      <div class="no-products">
        <p>No products found matching your filters.</p>
        <p>Try adjusting your filter selections.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = '';
  products.forEach(product => {
    const productCard = createProductCard(product);
    container.appendChild(productCard);
  });
}

// Create individual product card
function createProductCard(product) {
  const card = document.createElement('article');
  card.className = 'product-card';

  const imageAlt = `${product.title} - ${product.category}`;
  const isFavorite = favorites.includes(product.id);

  card.innerHTML = `
    <div class="product-image-wrapper">
      <img 
        src="${product.image}" 
        alt="${imageAlt}"
        class="product-image"
        loading="lazy"
      />
      <button 
        class="wishlist-btn ${isFavorite ? 'active' : ''}" 
        aria-label="${isFavorite ? 'Remove from wishlist' : 'Add to wishlist'}"
        data-product-id="${product.id}"
      >
        ${isFavorite ? '❤️' : '🤍'}
      </button>
    </div>
    <div class="product-info">
      <h3 class="product-title">${product.title}</h3>
      <div class="product-meta">
        <a href="#signin" class="signin-link">Sign in</a>
        <span> or </span>
        <a href="#create" class="create-link">Create an account</a>
        <span> to see pricing</span>
      </div>
    </div>
  `;

  // Add wishlist button event listener
  const wishlistBtn = card.querySelector('.wishlist-btn');
  wishlistBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleFavorite(product.id, wishlistBtn);
  });

  return card;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  fetchProducts();
  
  // Subscribe form handler
  document.getElementById('subscribe-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('subscribe-email').value;
    const successMsg = document.getElementById('subscribe-success');
    
    if (email && email.includes('@')) {
      successMsg.style.display = 'block';
      document.getElementById('subscribe-email').value = '';
      
      // Hide after 5 seconds
      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 5000);
    }
  });
});

// Wishlist Modal Functions
function showWishlistModal() {
  const modal = document.getElementById('wishlist-modal');
  const body = document.getElementById('wishlist-body');
  const title = document.getElementById('wishlist-title');
  
  favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  const wishlistProducts = allProducts.filter(p => favorites.includes(p.id));
  
  title.textContent = wishlistProducts.length > 0 
    ? `My Wishlist (${wishlistProducts.length})` 
    : 'My Wishlist';
  
  if (wishlistProducts.length === 0) {
    body.innerHTML = `
      <div class="empty-wishlist">
        <div class="empty-icon">❤️</div>
        <h3>Your wishlist is empty</h3>
        <p>Start adding products you love!</p>
        <button class="browse-btn" onclick="closeWishlistModal()">Browse Products</button>
      </div>
    `;
  } else {
    body.innerHTML = `
      <div class="wishlist-grid">
        ${wishlistProducts.map(product => `
          <article class="wishlist-item">
            <div class="wishlist-item-image">
              <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="wishlist-item-info">
              <h3 class="wishlist-item-title">${product.title}</h3>
              <p class="wishlist-item-category">${product.category}</p>
              <div class="wishlist-item-footer">
                <span class="wishlist-item-price">$${product.price}</span>
                <button 
                  class="remove-btn" 
                  onclick="removeFromWishlistModal(${product.id})"
                  aria-label="Remove from wishlist"
                >
                  Remove
                </button>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    `;
  }
  
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeWishlistModal() {
  const modal = document.getElementById('wishlist-modal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function removeFromWishlistModal(productId) {
  favorites = favorites.filter(id => id !== productId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  updateWishlistCount();
  showWishlistModal(); // Refresh the modal
  
  // Update all product cards on the page
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    const btnProductId = parseInt(btn.getAttribute('data-product-id'));
    if (btnProductId === productId) {
      btn.classList.remove('active');
      btn.textContent = '🤍';
    }
  });
}
