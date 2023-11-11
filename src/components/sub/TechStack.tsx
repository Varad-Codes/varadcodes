import Prompt from "../const/Prompt";

const TechStack = () => {
    const stack = [
        {type: "Languages", list: "Rust, JS/TS, Python, Java, C, C++"},
        {type: "Frameworks", list: "React/Redux, Spring, Express, NextJS, Electron, TailwindCSS"},
        {type: "Databases", list: "Access, MongoDB, MySQL"},
    ];

    return (
        <section>
            <div className="content m-5 md:p-5 md:m-0 md:mr-5">
                <Prompt cmd="techstack" />
                {stack.map((tech) => (
                    <div key={tech.type}>
                        <h2 className="text-xl text-orange">{tech.type}</h2>
                        <p>{tech.list}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;