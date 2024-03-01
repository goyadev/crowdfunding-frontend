import { useEffect } from "react";
import "./App.css";
import "./Toggle.css";

function Toggle() {
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
    <div className="theme-switch-wrapper">
      <label className="theme-switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" />
        <div className="slider round"></div>
      </label>
      <div className="description">Dark Mode</div>
    </div>
  );
}

export default Toggle;
