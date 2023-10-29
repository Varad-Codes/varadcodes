import Prompt from "./ui/Prompt";

const TechStack = () => {
  const tech = [
    { title: "Languages", info: "JavaScript/TypeScript, Rust, Java, Python, C/C++" },
    { title: "Frontend", info: "React, JavaFX, Swing" },
    { title: "Backend", info: "NodeJS Express, SpringBoot, Rust" },
    { title: "DataBase", info: "MySQL, MongoDB" },
    { title: "Embedded", info: "RaspberryPI, Arduino" },
    { title: "Additional", info: "NextJS, Linux, Tauri" },
  ];
  return (
    <>
      <Prompt CMD={"Technologies"} />
      <ol className="font-bold cmd-output">
        {tech.map((e) => {
          return (
            <li key={e.title} className="text-blue">
              <span className="text-yellow">{e.title}</span> - {e.info}
            </li>
          );
        })}
        <br />
      </ol>
      <br />
      <br />
    </>
  );
};

export default TechStack;
