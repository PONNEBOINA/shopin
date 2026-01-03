export default function Footer() {
  const footerLinks = [
    {
      title: 'HELP',
      links: ['Track your order', 'Returns & refunds', 'FAQs', 'Shipping info'],
    },
    {
      title: 'ABOUT',
      links: ['Our story', 'Sustainability', 'Careers', 'Press'],
    },
    {
      title: 'FOLLOW US',
      links: ['Instagram', 'Pinterest', 'YouTube', 'LinkedIn'],
    },
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <section className="footer-newsletter">
          <h3>JOIN OUR COMMUNITY</h3>
          <p>Subscribe for weekly inspiration, product drops, and member-only perks.</p>
          <form
            className="footer-newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </section>

        <div className="footer-links">
          {footerLinks.map((section) => (
            <div key={section.title} className="footer-links-section">
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#!">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Shopin. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#!">Privacy Policy</a>
          <a href="#!">Terms of Service</a>
          <a href="#!">Cookies</a>
        </div>
      </div>
    </footer>
  )
}
