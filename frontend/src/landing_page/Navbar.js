function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg py-3 position-fixed"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <a className="navbar-brand" style={{ marginLeft: "12rem" }} href="/">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "28%" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Signup
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="/">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true" href="/">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true" href="/">
                Support
              </a>
            </li>
            <li className="nav-item">
              <i
                style={{
                  marginTop: "14%",
                  marginLeft: "40px",
                  fontSize: "1.5rem",
                }}
                class="fa-solid fa-bars"
              ></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
