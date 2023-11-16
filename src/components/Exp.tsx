import Experience from "./sub/Experience";
import Projects from "./sub/Projects";

const Exp = () => {
    return (
        <section>
            <div className="flex flex-col md:flex-row w-full translate-y-[2%] md:translate-y-2/3">
                <Projects />
                <Experience />
            </div>
        </section>
    );
};

export default Exp;