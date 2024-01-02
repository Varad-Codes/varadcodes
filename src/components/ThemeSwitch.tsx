import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useContext, useEffect, useState } from 'react';

import { themeCtx } from '../App'

const ThemeSwitch = () => {
  // TODO: Fix the logic

  const [darkMode, setDarkMode] = useState(false)
  const userPrefTheme = useContext(themeCtx);
  
  const setDarkTheme = (theme: React.SetStateAction<boolean>) => {
    setDarkMode(theme) 
    { darkMode ? userPrefTheme=='dark': userPrefTheme=='light' }
  }

  useEffect(() => {
    const m = window.matchMedia("(prefers-color-scheme: dark)");
    { m.matches ? setDarkTheme(true) : setDarkTheme(false) }
    console.log(m.matches);
  }, []);

  return (
    <div>
      {darkMode? <DarkModeIcon /> : <LightModeIcon />}
    </div>
  )
}

export default ThemeSwitch;