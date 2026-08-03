import './App.css'

const journals = [
  {
    name: 'Lavender',
    description: 'Calming lavender-infused pages for a peaceful writing ritual.',
    tagline: 'Why lavender? Known to ease stress and quiet the mind before sleep.',
    price: '$18',
  },
  {
    name: 'Vanilla',
    description: 'Warm vanilla scent that turns journaling into a cozy escape.',
    tagline: 'Why vanilla? A comforting scent that makes writing feel like a treat.',
    price: '$18',
  },
  {
    name: 'Eucalyptus',
    description: 'Crisp eucalyptus notes to clear your mind before you write.',
    tagline: 'Why eucalyptus? Sharp and invigorating — perfect for morning pages.',
    price: '$18',
  },
]

function App() {
  return (
    <>
      <header className="site-header">
        <div className="logo">
          <span className="logo-mark" aria-hidden="true">🌿</span>
          <span className="logo-text">ecoEntries</span>
        </div>
        <nav className="site-nav">
          <a href="#products">Shop</a>
          <a href="#footer">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Journals that smell as good as they feel to write in</h1>
        <p>
          ecoEntries makes recycled-paper journals infused with natural scents,
          crafted by students who believe sustainability and self-expression go
          hand in hand.
        </p>
        <a href="#products" className="cta">
          Shop the collection
        </a>
      </section>

      <section className="about" id="about">
        <h2>Our Mission</h2>
        <p>
          ecoEntries makes journals for people who care about what they write in
          as much as what they write. Every journal is crafted from recycled
          paper, naturally scented, and fully biodegradable — so your ideas
          leave a mark, not a footprint.
        </p>
        <p>
          We're a small, student-run brand built around one belief:
          sustainability shouldn't be a compromise. From sourcing to
          packaging, every choice is made with the planet in mind.
        </p>
      </section>

      <section className="products" id="products">
        <h2>Our Journals</h2>
        <div className="product-grid">
          {journals.map((journal) => (
            <article className="product-card" key={journal.name}>
              <div className="product-image" aria-hidden="true">
                <span className="coming-soon-badge">Coming soon</span>
                <span>Photo coming soon</span>
              </div>
              <div className="product-card-body">
                <div className="product-card-heading">
                  <h3>{journal.name}</h3>
                  <p className="price">{journal.price}</p>
                </div>
                <p className="description">{journal.description}</p>
                <p className="tagline">{journal.tagline}</p>
                <a
                  href={`mailto:ecoentries.yes@gmail.com?subject=${encodeURIComponent(
                    `Notify me — ${journal.name}`
                  )}`}
                  className="notify-btn"
                >
                  Notify me
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer" id="footer">
        <p className="footer-logo">ecoEntries</p>
        <p>Questions or bulk orders? Reach out anytime.</p>
        <p>Email: ecoentries.yes@gmail.com &middot; Instagram: @ecoentries</p>
        <p className="footer-note">
          &copy; {new Date().getFullYear()} ecoEntries. Made by students, for the planet.
        </p>
      </footer>
    </>
  )
}

export default App

