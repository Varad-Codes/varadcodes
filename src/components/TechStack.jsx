import Prompt from "./ui/Prompt";

const TechStack = () => {
    return (
        <>
            <Prompt CMD={"Technologies"} />
            <ol className="font-bold cmd-output">
                <li><span className="text-yellow">Languages</span><span className="text-cyan"> - JavaScript/TypeScript, Rust, Java, Python, C/C++</span></li>
                <li><span className="text-yellow">Frontend</span><span className="text-cyan"> - React(Learning), JavaFX, Swing</span></li>
                <li><span className="text-yellow">Backend</span><span className="text-cyan"> - NodeJS Express, SpringBoot, Rust</span></li>
                <li><span className="text-yellow">DataBase</span><span className="text-cyan"> - MySQL, MongoDB</span></li>
                <li className="text-cyan"><span className="text-yellow">Hardware</span> - RasberryPI, Arduino(Learning)</li>
                <li><span className="text-yellow">Additional</span><span className="text-cyan"> - NextJS, Linux, Tauri, VIM(I CAN EXIT IT!)</span></li>
            </ol>
            <br />
            <br />
        </>
    );
};

export default TechStack;
