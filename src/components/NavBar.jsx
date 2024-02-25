import { Link } from "react-router-dom";
import "./NavBar.css";
import Toggle from "./Toggle";

function NavBar() {
  return (
    <>
      <div>
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
        </section>
        <Toggle />
      </div>
    </>
  );
}

export default NavBar;
