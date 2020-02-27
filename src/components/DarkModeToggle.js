import React from "react";
import useDarkMode from "use-dark-mode";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-light-toggle">
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
    </div>
  );
};

export default DarkModeToggle;
