import Prompt from './ui/Prompt';

const Experience = () => {
    return (
        <>
            <Prompt CMD={"Experience"}/>
            <ol className="cmd-output font-bold">
                <li className='text-cyan'><span className='text-yellow'>Headway&#39;s ExtraquadrataV1</span> - Member of Organizing Commitee in Site Incroyable (Web Development competition)</li>
                <li className='text-cyan'><span className='text-yellow'>International Coding Olympiad 2022</span> - International Rank - 14</li>
                <li className='text-cyan'><span className='text-yellow'>Sanskar Techfest 2023</span> - Senior Web Weaver - Special Mention</li>
            </ol>
            <br />
            <br />
        </>
    );
};

export default Experience;