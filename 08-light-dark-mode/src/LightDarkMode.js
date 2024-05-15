import React from "react";
import UseLocalStorage from "./useLocalStorage";

const LightDarkMode = () => {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>click to change theme!</p>
        <button onClick={handleToggleTheme} className="btn btn-warning">
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default LightDarkMode;
