import Education from "./sub/Education";
import TechStack from "./sub/TechStack";

const Qualification = () => {
    return (
        <section>
            <div className="flex flex-col md:flex-row w-full translate-y-[2%] md:translate-y-2/3">
                <TechStack  />
                <Education  />
            </div>
        </section>
    );
};

export default Qualification;