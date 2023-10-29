import Prompt from "./ui/Prompt";

const Education = () => {
    const edu = [
        {grade: "current", school: "Delhi Public School Kolar Road, Bhopal, Madhya Pradesh"},
    ];
    return (
        <>
            <Prompt CMD={"Education"} />

            <div className="cmd-output">
                <div>
                    <h1 className="cmd-output">
                        {edu.map((e) => {
                            return (
                                <p className="text-yellow font-bold" key={1}>{e.grade}: <span className="text-cyan font-bold">{e.school}</span></p>
                            );
                        })}
                    </h1>
                </div>
            </div>

            <br />
            <br />
        </>
    );
}
            
export default Education;
