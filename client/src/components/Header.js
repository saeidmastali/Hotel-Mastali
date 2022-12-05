import styled from "styled-components";
import imgSrc from '../Assets/./Images/Icons/logo4.png';
const Header = () => {
  return (
    <div>

      <section id="whole__section">
        {/* <!-- ====== NAVBAR START ====== --> */}
        <div className="main_nav bg-dark autohide">
          <div className="container">
            <nav
              className="navbar navbar-expand-lg navbar-dark custom-nav"
              id="hotel-navbar"
            >
              <div className="container-fluid">
                <div className="navbar-logo">
                  <img
                    className="img-fluid logo"
                    src={imgSrc}
                    alt="logo"
                  />
                  <Logo className="navbar-brand" href="http://localhost:3000/#">
                    Hotel<span style={{color: '#C59D5F'}}>Mastali</span>
                  </Logo>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav custom-navbar-nav w-100 justify-content-end">
                    <li className="nav-item custom-nav-item">
                      <a
                        className="nav-link custom-nav-link active"
                        aria-current="page"
                        href="http://localhost:3000/#home"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item custom-nav-item">
                      <a
                        className="nav-link custom-nav-link"
                        aria-current="page"
                        href="http://localhost:3000/#about"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item custom-nav-item">
                      <a
                        className="nav-link custom-nav-link"
                        aria-current="page"
                        href="http://localhost:3000/#menu"
                      >
                        Menu
                      </a>
                    </li>
                    <li className="nav-item custom-nav-item">
                      <a
                        className="nav-link custom-nav-link"
                        aria-current="page"
                        href="http://localhost:3000/#gallery"
                      >
                        Gallery
                      </a>
                    </li>
                    <li className="nav-item custom-nav-item">
                      <a
                        className="nav-link custom-nav-link"
                        aria-current="page"
                        href="http://localhost:3000/#Rooms"
                      >
                        Hotel
                      </a>
                    </li>
                    <li className="nav-item custom-nav-item">
                      <a
                        className="nav-link custom-nav-link"
                        aria-current="page"
                        href="http://localhost:3000/#reservation"
                      >
                        Resturant
                      </a>
                    </li>
                    <li className="nav-item custom-nav-item">
                      <a
                        className="nav-link custom-nav-link"
                        aria-current="page"
                        href="http://localhost:3000/#contact"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="nav-item custom-nav-item">
                      <a
                        className="nav-link custom-nav-link"
                        aria-current="page"
                        href="http://localhost:3000/#LOCATION"
                      >
                        Location
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

const Logo = styled.a`
  font-size: 1.8em !important;
  margin-right: 0px;
  font-weight: 600;
  font-family: var(--accentFontFamily);
  text-decoration: none;
  color: white;

`;
export default Header;
