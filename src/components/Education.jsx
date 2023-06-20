import Prompt from "./ui/Prompt";

const Education = () => {
    return (
        <>
            <Prompt CMD={"Education"} />

            <div className="cmd-output">
                <div>
                    <h1 className="cmd-output">
                        <p className="text-yellow font-bold">KG1 -{">"} Current(9th): <span className="text-cyan font-bold">Delhi Public School Kolar Road, Bhopal, Madhya Pradesh</span></p>
                        <p className="text/* -yellow font-bold">Playschool: <span className="text-cyan font-bold">Lovedale Preschool Bhopal, Madhya Pradesh</span></p>
                    </h1>
                </div>
            </div>

            <br />
            <br />
        </>
    );
}
            
export default Education;
