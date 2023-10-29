import Prompt from "./ui/Prompt";

const Projects = () => {
    const proj = [
        { title: "LifeHelpElm", info: "A Discord Bot, to help you get through though time, named LifeHelpElm!" },
        { title: "SSE_ENCRYPTON", info: "A Simple Encryption System written in C." },
        { title: "ATOM-bot", info: "A Voice Chatbot for ATOM. A attempt on making a humanoid completely by the students with limited resources. Showcased at the DPSKolar annual function 2022." }, 
        { title: "CodeSpector Projects", info: "A Subsidary of Build-Edge, a web related startup."},
        { title: "CryptoBoard", info: "A simple dashboard to manage and monitor crypto" },
    ];
    return (
        <>
            <Prompt CMD={"Projects"}/>
            <div>
            <p className="cmd-output text-yellow">
                {proj.map((e) => {
                    return (
                        <p className="text-blue font-bold" key={1}><span className="text-yellow font-bold">{e.title}</span> - {e.info}</p>
                    );
                })}
            </p>
            </div>
            <br /><br />
        </>
    );
}

export default Projects;