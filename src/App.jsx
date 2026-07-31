import './App.css'

const journals = [
  {
    name: 'Lavender',
    description: 'Calming lavender-infused pages for a peaceful writing ritual.',
    price: '$18',
  },
  {
    name: 'Vanilla',
    description: 'Warm vanilla scent that turns journaling into a cozy escape.',
    price: '$18',
  },
  {
    name: 'Eucalyptus',
    description: 'Crisp eucalyptus notes to clear your mind before you write.',
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

      <section className="products" id="products">
        <h2>Our Journals</h2>
        <div className="product-grid">
          {journals.map((journal) => (
            <article className="product-card" key={journal.name}>
              <div className="product-image" aria-hidden="true">
                <span>Photo coming soon</span>
              </div>
              <h3>{journal.name}</h3>
              <p>{journal.description}</p>
              <p className="price">{journal.price}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer" id="footer">
        <p className="footer-logo">ecoEntries</p>
        <p>Questions or bulk orders? Reach out anytime.</p>
        <p>Email: hello@ecoentries.example &middot; Instagram: @ecoentries</p>
        <p className="footer-note">
          &copy; {new Date().getFullYear()} ecoEntries. Made by students, for the planet.
        </p>
      </footer>
    </>
  )
}

export default App
