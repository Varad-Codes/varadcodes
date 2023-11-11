import Prompt from "../const/Prompt";

const Projects = () => {
    const projects = [
        {
            proj: "Notion Clone",
            desc: "A bare bones clone of Notion.so, made with React and TailwindCSS with basic functionality like adding pages, editing pages, and deleting pages.",
        },
        {
            proj: "Portfolio",
            desc: "This website! Made with React and TailwindCSS.",
        },
        {
            proj: "AstroAJ",
            desc: "A freelance website for a astrology organization",
        },
        {
            proj: "Shivasa Lights",
            desc: "A freelance website for a lighting company",
        },
    ];

    return (
        <section>
            <div className="content m-5 md:p-5 ">
                <Prompt cmd="projects" />
                {projects.map((proj) => (
                    <div key={proj.proj}>
                        <h2 className="text-xl text-orange">{proj.proj}</h2>
                        <p>{proj.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
