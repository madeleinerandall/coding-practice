import "./style.css";
import { Link } from "react-router-dom";

export default function NavBar({ menuOpen }) {
  // function NavBar(props) {
  //   const menuOpen = props.menuOpen;

  return (
    <aside className={menuOpen ? "active" : ""}>
      <div>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Product</Link>
        <Link to="/">Contact</Link>
        <img id="junk" src="/junk.png" alt="food" />
      </div>
    </aside>
  );
}
