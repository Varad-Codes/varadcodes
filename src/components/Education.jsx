import Prompt from "./ui/Prompt";

const Education = () => {
    return (
        <>
            <Prompt CMD={"Education"}/>

            <div>
                <p className="cmd-output">
                    <p className="text-yellow font-bold">KG1 -{">"} Current(9th): <span className="text-cyan font-bold">Delhi Public Kolar Road, Bhopal, Madhya Pradesh</span></p>
                    <p className="text-yellow font-bold">Playschool: <span className="text-cyan font-bold">Lovedale Preschool Bhopal, Mashya Pradesh</span></p>
                </p>
            </div>

            <br />
            <br />
        </>
    );
};

export default Education;