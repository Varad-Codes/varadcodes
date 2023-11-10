import Prompt from "./const/Prompt";
import Vision from "./Vision";

const Intro = () => {
    return (
        <section>
            <div className="flex flex-col md:flex-row w-full">
                <div className="content m-5 md:p-5 md:m-0">
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
                <div className="md:pl-5">
                    <Vision />
                </div>
            </div>
        </section>
    );
};

export default Intro;
