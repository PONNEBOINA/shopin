export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-section">
            <h3 className="footer-title">BE THE FIRST TO KNOW</h3>
            <p className="footer-text">Sign up for updates from mettā muse.</p>
            <div className="footer-subscribe">
              <input type="email" placeholder="Enter your e-mail..." aria-label="Email address" />
              <button aria-label="Subscribe">SUBSCRIBE</button>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">CONTACT US</h3>
            <p className="footer-text">+44 221 133 5360</p>
            <p className="footer-text">customercare@mettamuse.com</p>
            <h3 className="footer-title footer-title-spacing">CURRENCY</h3>
            <div className="currency-selector">
              <span className="currency-flag">🇺🇸</span>
              <span className="currency-code">USD</span>
            </div>
            <p className="footer-note">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-links-container">
          <div className="footer-column">
            <h4>mettā muse</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#stories">Stories</a></li>
              <li><a href="#artisans">Artisans</a></li>
              <li><a href="#boutiques">Boutiques</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#compliance">EU Compliances Docs</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><a href="#orders">Orders & Shipping</a></li>
              <li><a href="#join">Join/Login as a Seller</a></li>
              <li><a href="#payment">Payment & Pricing</a></li>
              <li><a href="#returns">Return & Refunds</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>FOLLOW US</h4>
            <div className="social-icons">
              <a href="#instagram" aria-label="Instagram" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <h4 className="payment-title">mettā muse ACCEPTS</h4>
            <div className="payment-icons">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='25' viewBox='0 0 40 25'%3E%3Crect fill='%23fff' width='40' height='25' rx='3'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23000' font-size='10' font-family='Arial'%3EGPay%3C/text%3E%3C/svg%3E" alt="Google Pay" />
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='25' viewBox='0 0 40 25'%3E%3Crect fill='%23fff' width='40' height='25' rx='3'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23000' font-size='10' font-family='Arial'%3EMCard%3C/text%3E%3C/svg%3E" alt="Mastercard" />
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='25' viewBox='0 0 40 25'%3E%3Crect fill='%23fff' width='40' height='25' rx='3'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23000' font-size='10' font-family='Arial'%3EPayPal%3C/text%3E%3C/svg%3E" alt="PayPal" />
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='25' viewBox='0 0 40 25'%3E%3Crect fill='%23fff' width='40' height='25' rx='3'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23000' font-size='10' font-family='Arial'%3EAmex%3C/text%3E%3C/svg%3E" alt="American Express" />
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='25' viewBox='0 0 40 25'%3E%3Crect fill='%23fff' width='40' height='25' rx='3'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23000' font-size='10' font-family='Arial'%3EAPay%3C/text%3E%3C/svg%3E" alt="Apple Pay" />
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='25' viewBox='0 0 40 25'%3E%3Crect fill='%235469d4' width='40' height='25' rx='3'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23fff' font-size='9' font-family='Arial' font-weight='bold'%3EoPay%3C/text%3E%3C/svg%3E" alt="O.Pay" />
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
