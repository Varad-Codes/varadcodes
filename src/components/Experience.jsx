import Prompt from './ui/Prompt';

const Experience = () => {
  const exp = [
    { title: "Build-Edge", info: "Co-Founder, CTO" },
    { title: "CodeSpector", info: "Co-Founder, CEO" },
    { title: "Headway's Extraquadrata", info: "Member of Organizing Commitee" },
  ];
  return (
    <>
      <Prompt CMD={"Experience"} />
      <ol className="cmd-output font-bold">
        {exp.map((e) => {
          return (
            <li key={e.title} className='text-blue'>
              <span className="text-yellow">{e.title}</span> - {e.info}
            </li>
          );
        })}
      </ol>
      <br />
      <br />
    </>
  );
};

export default Experience;
