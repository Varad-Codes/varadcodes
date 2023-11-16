import { motion } from "framer-motion";

import Prompt from "../const/Prompt";

const Intro = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
        >
                <div className="content m-5 md:p-5 md:m-0 md:mr-5">
                    <Prompt cmd="intro" />
                    <h1>
                        {/* I'm Varad Sharma, a self-taught Web and Rust developer
                        from India. I'm currently in 9th grade, and I've been
                        programming for about 3 years. I started out with Java,
                        then learned Systems Programming, and finally switched
                        to web development and rust. I also learned Linux from a
                        cyber security course, Then daily driving Arch, and I'm
                        a big fan of anime. */}
                        I'm Varad Sharma, a self-taught Full-Stack developer from India.
                        I'm currently in High School and been into programming for about 3 years.
                        I started out with doing Java, then System Programming, Game Dev and 
                        finally switched to Web Development. I actively contribute to Open Source
                        and support their cause.
                    </h1>
                </div>
        </motion.div>
    );
};

export default Intro;
