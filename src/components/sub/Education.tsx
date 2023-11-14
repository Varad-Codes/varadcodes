import Prompt from "../const/Prompt";

const Education = () => {
    const education = [
        {
            type: "School ( k-12 )",
            institute: "Delhi Public School, Kolar Road, Bhopal",
        },
        {
            type: "Technologies",
            institute: "Slef Taught",
        },
    ];

    return (
        <div>
            <div className="content m-5 p-5 md:m-0">
                <Prompt cmd="education" />
                {education.map((edu) => (
                    <div key={edu.institute}>
                        <h2 className="text-xl text-orange">{edu.type}</h2>
                        <p>{edu.institute}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
