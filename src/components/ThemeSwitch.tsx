import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';


const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(true);

  // useEffect(() => {
  //   const m = window.matchMedia("(prefers-color-scheme: dark)");
  //   setDarkMode(m.matches); // Update darkMode only once based on media query
  // }, []); // Empty dependency array to run only once

  const handleThemeChange = () => {
    setDarkMode(!darkMode); // Toggle darkMode state
    console.log("line 18", darkMode);
    const main = document.getElementById("main")

    if (!darkMode) {
      main?.classList.remove("light")
      main?.classList.add("dark")
    }
    else {
      main?.classList.remove("dark")
      main?.classList.add("light")
    }
    // document.getElementById("main")?.classList.add()
  };

  return (
    <div>
      <button onClick={handleThemeChange}>
        {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
      </button>
    </div>
  );
};

export default ThemeSwitch;
