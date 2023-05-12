import Prompt from "./ui/Prompt";

const AboutMe = _ => {
    return (
        <>
            <Prompt CMD={"AboutMe"} />
            <p className="cmd-output">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aperiam velit beatae eos perferendis cum adipisci magni optio, minima aliquam ea, voluptate cumque ex harum, quis facilis fuga magnam aspernatur odio odit?</p>
            <br />
            <br />
        </>
    );
};

export default AboutMe;