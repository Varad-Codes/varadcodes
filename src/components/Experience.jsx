import { TypeAnimation } from 'react-type-animation';
import Prompt from './ui/Prompt';

const Experience = () => {
    return (
        <>
            <Prompt CMD={"Experience"}/>
            <ol className="cmd-output font-bold">
            <TypeAnimation
              sequence={[
                  "Build-Edge - "
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-yellow"
            />
            <TypeAnimation
              sequence={[
                  " Co-Founder, CTO"
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
                  "Headway's Extraquadrata -"
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-yellow"
            />
            <TypeAnimation
              sequence={[
                  " Member of Organizing Commitee in Site Incroyable (Web Development competition)"
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
                  "International Coding Olympiad 2022 -"
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-yellow"
            />
            <TypeAnimation
              sequence={[
                  " International Rank : 14"
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
                  "Sanskar Techfest 2023 - "
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-yellow"
            />
            <TypeAnimation
              sequence={[
                  " Senior Web Weaver : Special Mention"
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-cyan"
            />
            </ol>
            <br />
            <br />
        </>
    );
};

export default Experience;
