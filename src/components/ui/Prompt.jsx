const Prompt = ({ CMD }) => {
    return (
        <>
            <h1 className="font-bold"><span className="text-green">/home/f4ster/</span><span className="text-blue">@</span><span className="text-magenta">f4ster</span></h1>
            <p className="font-bold text-xl"><span className="text-yellow text-xl">&gt;</span> {CMD} </p>
        </>
    );
};

export default Prompt;