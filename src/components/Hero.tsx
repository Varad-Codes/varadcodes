import { motion } from "framer-motion";

import Prompt from "./const/Prompt";

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <section className="hero transition flex flex-col md:flex-row">
                <div className="hero-content text-7xl pr-12 m-5 lg:translate-y-2/3 hover:shadow-xl">
                    <Prompt cmd="welcome" />
                    <h1 className="">Hi,</h1>
                    <h1 className="">I'm Varad Sharma</h1>
                </div>
                <div>
                    <div className="hero-image hero-content m-5 rounded-full lg:translate-y-2/3">
                        <img src="/me.png" alt="hero" className="rounded  ml-[8%] mr-[20%] md:m-0" />
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Hero;
