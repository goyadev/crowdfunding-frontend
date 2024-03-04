import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import "./App.css";
import { useEffect } from "react";
import { Footer } from "./Footer";

function App() {
  useEffect(() => {
    const toggleSwitch = document.querySelector(
      '.theme-switch input[type="checkbox"]'
    );

    function switchTheme(event) {
      if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    }

    toggleSwitch.addEventListener("change", switchTheme, false);

    return () => {
      toggleSwitch.removeEventListener("change", switchTheme);
    };
  }, []);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
