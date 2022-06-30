import "./style.css";
import { useState } from "react";
import "../NavBar";
import NavBar from "../NavBar";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuOpen() {
    setMenuOpen(!menuOpen);
    console.log("hamburger");
  }

  return (
    <>
      <header>
        <div className="gutters">
          <h1>Madeleine Randall</h1>
          {menuOpen ? (
            <img
              onClick={handleMenuOpen}
              className="menubar"
              src="/hamburger.png"
              alt="menu"
            />
          ) : (
            <img
              onClick={handleMenuOpen}
              className="menubar"
              src="/back-arrow.png"
              alt="back"
            />
          )}
        </div>
        <NavBar menuOpen={menuOpen} />
      </header>
      <div id="spacing" />
    </>
  );
}

export default Header;
