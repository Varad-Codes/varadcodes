import { GitHub } from "@mui/icons-material";

import Prompt from "./ui/Prompt";

const Projects = () => {
    return (
        <>
            <Prompt CMD={"Projects"}/>
            <div>
            <p className="cmd-output text-yellow">
                <li>A coustom Minecraft 1.8.9 client <span className="text-blue font-bold">(Could not upload because of licence violation)</span></li>
                <li>A Simple Encryption System written in C. <span className="text-blue"><a href="https://github.com/Varad-Sharma/SSE_ENCRYPTON" target="_blank" ><GitHub /></a></span></li>
                <li>A Voice Chatbot for ATOM. A attempt on making a humanoid completely by the students with limited resources. <br /> Showcased at the DPSKolar annual function 2022. <a href="https://github.com/Varad-Codes/ATOM-bot" target="_blank" className="text-blue"><GitHub /></a></li>
            </p>
            </div>
            <br /><br />
        </>
    );
}

export default Projects;