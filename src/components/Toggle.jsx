import "./Toggle.css";
import { useState } from "react";
import "../components/App.css";

function Toggle() {
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = () => {
    setDarkMode(!darkMode);
    console.log("theme change triggered");
  };

  return (
    <div className={`toggle ${darkMode ? "dark-mode" : ""}`} id="modetoggle">
      <span className="switch">
        <input id="switch-rounded" type="checkbox" onClick={changeTheme} />
        <label htmlFor="switch-rounded"></label>
      </span>
    </div>
  );
}
export default Toggle;
