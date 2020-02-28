import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import "../../scss/common.scss";

const Header = () => {
  return (
    <header className="header-section">
      <div className="container">
        <Nav />
      </div>
      <section className="banner-section">
        <div className="container">
          <Banner />
        </div>
      </section>
    </header>
  );
};
export default Header;
