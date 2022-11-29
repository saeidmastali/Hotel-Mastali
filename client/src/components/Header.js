import styled from "styled-components";

const Header = () => {
  return (
    <div>
      {/* <div class="fakeLoader"></div> */}
      <audio loop autoplay>
        <source
          src="../../Audio/Gabriel Light - All the stars (official audio 2020).mp3"
          type="audio/mp3"
        />
      </audio>
      <section id="whole__section">
        {/* <!-- ====== NAVBAR START ====== --> */}
        <div class="main_nav bg-dark autohide">
          <div class="container">
            <nav
              class="navbar navbar-expand-lg navbar-dark custom-nav"
              id="hotel-navbar"
            >
              <div class="container-fluid">
                <div class="navbar-logo">
                  <img
                    class="img-fluid logo"
                    src="./Images/Icons/logo4.png"
                    alt="logo"
                  />
                  <Logo class="navbar-brand" href="#">
                    HOTEL<span style={{color: '#C59D5F'}}> CALIFORNIA</span>
                  </Logo>
                </div>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav custom-navbar-nav w-100 justify-content-end">
                    <li class="nav-item custom-nav-item">
                      <a
                        class="nav-link custom-nav-link active"
                        aria-current="page"
                        href="#home"
                      >
                        Home
                      </a>
                    </li>
                    <li class="nav-item custom-nav-item">
                      <a
                        class="nav-link custom-nav-link"
                        aria-current="page"
                        href="#about"
                      >
                        About
                      </a>
                    </li>
                    <li class="nav-item custom-nav-item">
                      <a
                        class="nav-link custom-nav-link"
                        aria-current="page"
                        href="#menu"
                      >
                        Menu
                      </a>
                    </li>
                    <li class="nav-item custom-nav-item">
                      <a
                        class="nav-link custom-nav-link"
                        aria-current="page"
                        href="#gallery"
                      >
                        Gallery
                      </a>
                    </li>
                    <li class="nav-item custom-nav-item">
                      <a
                        class="nav-link custom-nav-link"
                        aria-current="page"
                        href="#reservation"
                      >
                        Resturant
                      </a>
                    </li>
                    <li class="nav-item custom-nav-item">
                      <a
                        class="nav-link custom-nav-link"
                        aria-current="page"
                        href="#contact"
                      >
                        Contact
                      </a>
                    </li>
                    <li class="nav-item custom-nav-item">
                      <a
                        class="nav-link custom-nav-link"
                        aria-current="page"
                        href="#LOCATION"
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
