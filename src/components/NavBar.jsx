import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/project">PROJECTS</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
