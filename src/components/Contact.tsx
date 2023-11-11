import { Instagram } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { Mail } from "@mui/icons-material";

import Prompt from "./const/Prompt";

const Contact = () => {
    return (
        <>
            <div className="flex md:translate-y-2/3">
                <div className="content m-5 w-full translate-y-2/3">
                    <Prompt cmd="contact" />
                    <div>
                        <span className="mb-1">
                            <a
                                href="https://instagram.com/f4ster444"
                                className=""
                            >
                                <span className="text-orange">
                                    <Instagram />
                                </span>
                                {" "}
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
                                </span>
                                {" "}
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
                                </span>
                                {" "}
                                EMail
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
