import Prompt from "../const/Prompt";

const Intro = () => {
    return (
        <section>
                <div className="content m-5 md:p-5 md:m-0 md:mr-5">
                    <Prompt cmd="intro" />
                    <h1>
                        I'm Varad Sharma, a self-taught Web and Rust developer
                        from India. I'm currently in 9th grade, and I've been
                        programming for about 3 years. I started out with Java,
                        then learned Systems Programming, and finally switched
                        to web development and rust. I also learned Linux from a
                        cyber security course, Then daily driving Arch, and I'm
                        a big fan of anime.
                    </h1>
                </div>
        </section>
    );
};

export default Intro;
