import Prompt from "../const/Prompt";

const Experience = () => {
    const experience = [
        {
            org: "Build-Edge Group",
            role: "CTO, Founder",
            timeline: "2023-present",
        },
        { 
            org: "CodeSpector", 
            role: "CEO, Founder", 
            timeline: "2023-present" 
        },
        {
            org: "Extraquadrata",
            role: "Organizer",
            timeline: "2022-present",
        },
    ];

    return (
        <section>
            <div className="content m-5 md:p-5 ">
                <Prompt cmd="experience" />
                {experience.map((exp) => (
                    <div key={exp.org}>
                        <h2 className="text-xl text-orange">{exp.org}</h2>
                        <p className="text-xs mb-2">{exp.timeline}</p>
                        <p>{exp.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
