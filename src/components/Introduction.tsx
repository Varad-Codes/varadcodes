import Intro from "./sub/Intro";
import Vision from "./sub/Vision";

const Introduction = () => {
    return (
        <section>
            <div className="flex flex-col md:flex-row w-full md:translate-y-2/3">
                <Intro />
                <Vision />
            </div>
        </section>
    );
};

export default Introduction;