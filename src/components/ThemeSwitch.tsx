import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useEffect, useState } from 'react';

const ThemeSwitch = () => {
  // TODO: Fix the logic

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const m = window.matchMedia("prefers-color-scheme: dark");
    if (m.matches) {
      setDarkMode(true)
    }
  }, []);

  return (
    <div>
      {darkMode? <DarkModeIcon /> : <LightModeIcon />}
    </div>
  )
}

export default ThemeSwitch;