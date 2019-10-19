import React from "react";

import logo from "../../img/logo.png";

const HomePage = () => {
  //   return <h1>HomePAge</h1>;
  return (
    <section className="banner-area">
      <header className="default-header">
        <nav className="navbar navbar-expand-lg  navbar-light">
          <div className="navbar-brand">
            <a className="navbar-brand" href="/">
              {/* Link to index ... */}
              {/*  */}
              <img src={logo} alt="asad" />
            </a>
            {/* <button></button> */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="text-white lnr lnr-menu"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end align-items-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#service">Service</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#project">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="/"
                    id="navbardrop"
                    data-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="generic.html">
                      Generic
                    </a>
                    <a className="dropdown-item" href="elements.html">
                      Elements
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
};

export default HomePage;
