import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="text-center  w-[90vw] flex flex-col justify-center content-center">
      {/* <div className="hero-bg flex content-center justify-center h-[50vh] md:h-[90vh] w-screen md:w-[90vw] -z-10 absolute" ></div> */}
      {/* Desktop */}
      <div className="hero-cnt justify-center content-center hidden md:grid">
        <div className="hero-cnt-ver">
          {/* Vertical#1 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-8  hero-bento-el"
          >
            <h1 className="text-[3.2rem] md:text-4xl p-2 pr-0 md:p-5 font-bold">
              Skills
            </h1>
          </motion.div>

          {/* Vertical#2 */}
          <div className="flex gap-6 flex-col md:flex-row">
            {" "}
            {/* Horizontal */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-8  hero-bento-el"
            >
              <h1 className="text-[3.2rem] md:text-4xl p-2 pr-0 md:p-5 font-bold">
                Experience
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-8  hero-bento-el"
            >
              <h1 className="text-[5rem] md:text-8xl p-2 pr-0 md:p-5 font-bold ">
                Varad <br /> Sharma
              </h1>
              <p className="text-slate-500 tracking-[0.55rem] mb-5 uppercase">
                WEB DEVELOPER <br /> mimialist ui
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-8  hero-bento-el"
            >
              <h1 className="text-[3.2rem] md:text-4xl p-2 pr-0 md:p-5 font-bold">
                Projects
              </h1>
            </motion.div>
          </div>

          {/* Vertical#3 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-8  hero-bento-el"
          >
            <h1 className="text-[3.2rem] md:text-4xl p-2 pr-0 md:p-5 ml-bold">
              Education
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Mobile */}
      <div className="hero-cnt justify-center content-center grid mt-4 md:hidden">
        <div className="hero-cnt-ver">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-8 p-4 hero-bento-el"
          >
            <h1 className="text-[5rem] md:text-8xl p-2 pr-0 md:p-5 font-bold">
              Varad <br /> Sharma
            </h1>
            <p className="text-slate-500 tracking-[0.55rem] mb-5 uppercase">
              WEB DEVELOPER <br /> mimialist ui
            </p>
          </motion.div>

          {/* Vertical#2 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-8  hero-bento-el"
          >
            <h1 className="text-[3.2rem] md:text-4xl p-2 pr-0 md:p-5 font-bold">
              Skills
            </h1>
          </motion.div>

          <div className="flex gap-6 flex-col md:flex-row">
            {" "}
            {/* Horizontal */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-8  hero-bento-el"
            >
              <h1 className="text-[3.2rem] md:text-4xl p-2 pr-0 md:p-5 font-bold">
                Experience
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-8  hero-bento-el"
            >
              <h1 className="text-[3.2rem] md:text-4xl p-2 pr-0 md:p-5 font-bold">
                Projects
              </h1>
            </motion.div>
          </div>

          {/* Vertical#3 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-8  hero-bento-el"
          >
            <h1 className="text-[3.2rem] md:text-4xl p-2 pr-0 md:p-5 ml-bold">
              Education
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
