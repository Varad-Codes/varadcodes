import { motion } from "framer-motion";

import Prompt from "../const/Prompt";

const Projects = () => {
    const projects = [
        {
            proj: "NoteIt",
            desc: "A bare bones note-taking app inspired by Notion, made with React and TailwindCSS with basic functionality like adding pages, editing pages, and deleting pages.",
        },
        {
            proj: "Portfolio",
            desc: "This website! Made with React and TailwindCSS.",
        },
        {
            proj: "AstroAJ",
            desc: "A freelance website for a astrology organization",
        },
        {
            proj: "Shivasa Lights",
            desc: "A freelance website for a decorative lighting company",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
        >
            <div className="content m-5 md:p-5 ">
                <Prompt cmd="projects" />
                {projects.map((proj) => (
                    <div key={proj.proj}>
                        <h2 className="text-xl text-orange">{proj.proj}</h2>
                        <p>{proj.desc}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Projects;
