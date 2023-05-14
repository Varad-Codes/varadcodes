/* eslint-disable react/no-unescaped-entities */
import Prompt from "./ui/Prompt";

const AboutMe = () => {
    return (
        <>
            <Prompt CMD={"AboutMe"} />
            <p className="cmd-output">
                I'm Varad Sharma, a self-taught web developer from India. I'm currently in 9th grade, and I've been programming for about 3 years. I started out with Java, then learned Rust, and finally switched to web development. I also learned Linux from a cyber security course, and I'm a big fan of anime.
            </p>
            <br />
            <br />
        </>
    );
};

export default AboutMe;