import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <section className="navsection">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
            <li>
              <Link to="/create-account">CREATE ACCOUNT</Link>
            </li>
            <li>
              <Link to="/create-project">CREATE PROJECT</Link>
            </li>
          </ul>
        </nav>
        <img src="/search.png" className="icon" id="search" alt="searchbar" />
        <img
          src="/switch-dark.png"
          className="icon"
          id="switchdark"
          alt="dark mode toggle"
        />
      </section>
      <Outlet />
    </>
  );
}

export default NavBar;
