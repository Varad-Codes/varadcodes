import { TypeAnimation } from 'react-type-animation';

import Prompt from "./ui/Prompt";

const TechStack = () => {
    return (
        <>
            <Prompt CMD={"Technologies"} />
            <ol className="font-bold cmd-output">
            <TypeAnimation
              sequence={[
                  "Languages - "
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-yellow"
            />
            <TypeAnimation
              sequence={[
                  "- JavaScript/TypeScript, Rust, Java, Python, C/C++ "
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-cyan"
            />
              <br/>
            <TypeAnimation
              sequence={[
                  "Frontend -"
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-yellow"
            />
            <TypeAnimation
              sequence={[
                  "- React(Learning), JavaFX, Swing"
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-cyan"
            />
              <br/>
            <TypeAnimation
              sequence={[
                  "Backend -"
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-yellow"
            />
            <TypeAnimation
              sequence={[
                  "- NodeJS Express, SpringBoot, Rust"
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-cyan"
            />
              <br/>
            <TypeAnimation
              sequence={[
                  "DataBase-"
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-yellow"
            />
            <TypeAnimation
              sequence={[
                  "- MongoDB, MySQL"
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-cyan"
            />
              <br/>
            <TypeAnimation
              sequence={[
                  "Hardware -"
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-yellow"
            />
            <TypeAnimation
              sequence={[
                  "- RaspberryPI, Arduino "
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-cyan"
            />
              <br/>
            <TypeAnimation
              sequence={[
                  "Aditional -"
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-yellow"
            />
            <TypeAnimation
              sequence={[
                  "- NextJS, Linux, Tauri, VIM(I CAN EXIT IT!)"
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-cyan"
            />
            <br/>
            </ol>
            <br />
            <br />
        </>
    );
};

export default TechStack;
