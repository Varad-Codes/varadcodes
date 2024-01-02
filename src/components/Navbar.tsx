import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';

import ThemeSwitch from './ThemeSwitch';

const Nav = () => {

  return (
    <nav className="text-slate-100 p-5 mb-5 md:absolute md:block">
      <div className="absolute block z-1">
        {/* <ul className="md:flex flex-row p-1 text-center hidden items-center self-center content-center justify-center"> */}
        {/*   <li className="nav-el"><a href="/">Home</a></li> */}
        {/*   <li className="nav-el"><a href="#abt">About</a></li> */}
        {/*   <li className="nav-el"><a href="#edu">Education</a></li> */}
        {/*   <li className="nav-el"><a href="#exp">Experience</a></li> */}
        {/*   <li className="nav-el"><a href="#cont">Contact</a></li> */}
        {/* </ul> */}
        <ThemeSwitch />
      </div>
      <ul className="flex flex-row p-1 text-center md:hidden justify-center">
        <li className="nav-el"><a href="/"><HomeIcon /></a></li>
        <li className="nav-el"><a href="#abt"><InfoIcon /></a></li>
        <li className="nav-el"><a href="#edu"><SchoolIcon /></a></li>
        <li className="nav-el"><a href="#exp"><WorkIcon /></a></li>
        <li className="nav-el"><a href="#cont"><ContactMailIcon /></a></li>
        <ThemeSwitch />
      </ul>
    </nav>
  ) 
}

export default Nav;