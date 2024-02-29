import { Link } from "react-router-dom";
import "./NavBar.css";
import Toggle from "./Toggle";
import { Head } from "./Head";
import { useAuth } from "../hooks/use-auth.js";

function NavBar() {
  const { auth, setAuth } = useAuth();
  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setAuth({ token: null });
  };

  // console.log(auth);
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
                {auth.token ? (
                  <Link to="/" onClick={handleLogout}>
                    LOG OUT
                  </Link>
                ) : (
                  <Link to="/login">LOGIN</Link>
                )}
              </li>
              <li>
                {auth.token ? (
                  <Link to="/create-project">CREATE PROJECT</Link>
                ) : (
                  <Link to="/"></Link>
                )}
              </li>
              <li>
                {auth.token ? (
                  <Link to="/"></Link>
                ) : (
                  <Link to="/create-account">CREATE ACCOUNT</Link>
                )}
              </li>
            </ul>
          </nav>
          <img src="/search.png" className="icon" id="search" alt="searchbar" />
        </section>
        <Toggle />
        <Head />
      </div>
    </>
  );
}

export default NavBar;
