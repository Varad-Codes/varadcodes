import { TypeAnimation } from 'react-type-animation';
import Prompt from "./ui/Prompt";

const Education = () => {
    return (
        <>
            <Prompt CMD={"Education"} />

            <div className="cmd-output">
            <TypeAnimation
              sequence={[
                  "KG-1 -> Current: "
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-yellow"
            />
            <TypeAnimation
              sequence={[
                  " Delhi Public School Kolar Road Bhopal"
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="text-cyan"
            />
            </div>

            <br />
            <br />
        </>
    );
};

export default Education;
