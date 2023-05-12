import Prompt from "./ui/Prompt";

const TechStack = _ => {
    return (
        <>
            <Prompt CMD={"Technologies"} />
            <p className="cmd-output">
                <ol className="font-bold">
                    <li><span className="text-yellow">Languages</span><span className="text-cyan"> - JavaScript, Java, Python, Rust</span></li>
                    <li><span className="text-yellow">Frontend</span><span className="text-cyan"> - React, Angular, JavaFX, Swing</span></li>
                    <li><span className="text-yellow">Backend</span><span className="text-cyan"> - NodeJS Express, SpringBoot</span></li>
                    <li><span className="text-yellow">DataBase</span><span className="text-cyan"> - MySQL, MongoBD</span></li>
                    <li><span className="text-yellow">Additional</span><span className="text-cyan"> - NextJS, Linux, VIM(I CAN EXIT IT!)</span></li>
                </ol>
            </p>
            <br />
            <br />
        </>
    );
};

export default TechStack;