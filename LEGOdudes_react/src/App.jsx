import './style/lego.css'


function App() {

  function Header() {
    return (
      <header>
        <h1>
          <a href="index.html">
            <img src="website_images/LD_logo.svg" alt="LEGOdudes" />
          </a>
        </h1>
        <button id="cart-button">
          <div id="cart-quantity">0</div>
          <img src="website_images/legocart.svg" alt="Handlevogn" />
        </button>
      </header>
    )
  }

  function Nav() {
    return (
      <nav>
        <a href="#">City</a>
        <a href="#">Ninjago</a>
        <a href="#">Castle & Knights</a>
        <a href="#">Marine & Pirates</a>
        <a href="#">Movie Characters</a>

      </nav>

    )
  }

  function CategoryTitle() {
    return (
      <h2>Ninjago</h2>
    )
  }

  function Products() {
    return (
      <div id="product-list"></div>
    )
  }

  return (
    <div id="container">
      <Header />
      <Nav />
      <main>

      </main>

    </div>
  )
}

export default App
