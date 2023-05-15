import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

import Prompt from "./ui/Prompt";

const Socials = () => {
    return (
        <>
            <Prompt CMD={"Socials"} />
            <div>
                <ol className="cmd-output font-bold">
                    <li className="text-yellow"><a href="https://github.com/Varad-Codes" target='_blank' rel="noreferrer"><GitHubIcon /><span className="text-blue"> (Current)</span></a></li>
                    <li className="text-yellow"><a href="https://github.com/Varad-Sharma"><GitHubIcon /><span className="text-blue"> (Old)</span></a></li>

                    <li className="text-yellow"><a href="https://instagram.com/f4ster444"> <InstagramIcon /><span className='text-blue'> Instagram</span></a></li>

                    <li className="text-yellow"><a href="mailto:varad.code19@gmail.com"> <EmailIcon /> <span className="text-blue"> Email </span> </a></li>
                </ol>
            </div>
        </>
    );
};

export default Socials;
