import Prompt from "./ui/Prompt";

const AboutMe = _ => {
    return (
        <>
            <Prompt CMD={"AboutMe"} />
            <p className="cmd-output">
                Varad Sharma is a self-taught web developer from India. He started out as a Java developer, then learned Rust, and finally switched to web development. He also learned Linux from a cyber security course and became a fan of anime. He is currently in 9th grade and is still practicing his programming skills.
            </p>
            <br />
            <br />
        </>
    );
};

export default AboutMe;