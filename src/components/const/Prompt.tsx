const Prompt = ({ cmd }: {cmd: string}) => {
    return (
        <>
            <section className="prompt text-[1.3rem]">
                <span className="prompt-text"><span className='text-orange'>root</span>@<span className='text-green'>varadcodes</span>:~$</span>
                <br />
                <span className="prompt-cmd text-3xl pl-6">{cmd}</span>
                <br /><br /><br />
            </section>
        </>
    );
};

export default Prompt;