import { Instagram } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { Mail } from "@mui/icons-material";

import { motion } from "framer-motion";

import Prompt from "./const/Prompt";

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
        >
            <div className="flex w-full translate-y-[45%%] md:translate-y-2/3">
                <div className="content m-5 w-full translate-y-full bottom md:translate-y-2/3">
                    <Prompt cmd="contact" />
                    <div>
                        <span className="mb-1">
                            <a
                                href="https://instagram.com/f4ster444"
                                className=""
                            >
                                <span className="text-orange">
                                    <Instagram />
                                </span>{" "}
                                Instagram
                            </a>
                        </span>
                        <br />
                        <span>
                            <a
                                href="https://github.com/Varad-Codes"
                                className=""
                            >
                                <span className="text-orange">
                                    <GitHub />
                                </span>{" "}
                                Github
                            </a>
                        </span>
                        <br />
                        <span>
                            <a
                                href="mailto:varad.code19@gmail.com"
                                className=""
                            >
                                <span className="text-orange">
                                    <Mail />
                                </span>{" "}
                                EMail
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
