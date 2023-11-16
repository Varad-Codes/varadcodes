import { motion } from "framer-motion";

import Prompt from "../const/Prompt";

const TechStack = () => {
    const stack = [
        { type: "Languages", list: "Rust, JS/TS, Python, Java, C, C++" },
        {
            type: "Frameworks",
            list: "React, Redux, Spring, Express, NextJS, Electron, TailwindCSS, Android, React Native",
        },
        { type: "Databases", list: "Access, MongoDB, MySQL" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
        >
            <div className="content m-5 md:p-5 md:m-0 md:mr-5">
                <Prompt cmd="techstack" />
                {stack.map((tech) => (
                    <div key={tech.type}>
                        <h2 className="text-xl text-orange">{tech.type}</h2>
                        <p>{tech.list}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default TechStack;
