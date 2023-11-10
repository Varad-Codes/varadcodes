import Prompt from "../const/Prompt";

const TechStack = () => {
    const stack = [
        {type: "Languages", list: "Rust, Typescript, Python, Java, C, C++"},
    ];

    return (
        <section>
            <div className="content m-5 md:p-5 md:m-0 md:mr-5">
                <Prompt cmd="tech-stack" />
                {stack.map((tech) => (
                    <div key={tech.type}>
                        <h3>{tech.type}</h3>
                        <p>{tech.list}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;