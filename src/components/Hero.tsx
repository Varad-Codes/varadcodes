import { motion } from 'framer-motion';

const Hero = () => {

  return (
    <div className="text-center p-5 md:mt-[15vh] md:m-10 flex flex-col justify-center">
      {/* <div className="hero-bg flex content-center justify-center h-[50vh] md:h-[90vh] w-screen md:w-[90vw] -z-10 absolute" ></div> */}
      <div className='hero-cnt'>
        <div className='hero-cnt-ver'>
          {/* Vertical#1 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-8 md:ml-8 rounded-xl border-gray-50 border-2"
          >
            <h1 className="text-[4rem] md:text-6xl p-2 pr-0 md:p-5 ml-2 md:ml-5 font-bold">Skills</h1>
            <p className="text-slate-500 pl-4 ml-1 md:pl-5 md:ml-6 mb-5 uppercase">WEB DEVELOPER <br /> mimialist    ui</p>
          </motion.div>

          {/* Vertical#2 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-8 md:ml-8 rounded-xl border-gray-50 border-2"
          >
            <h1 className="text-[4.5rem] md:text-7xl p-2 pr-0 md:p-5 ml-2 md:ml-5 font-bold">Varad <br /> Sharma</h1>
            <p className="text-slate-500 pl-4 ml-1 md:pl-5 md:ml-6 mb-5 uppercase">WEB DEVELOPER <br /> mimialist    ui</p>
          </motion.div>

          {/* Vertical#3 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-8 md:ml-8 rounded-xl border-gray-50 border-2"
          >
            <h1 className="text-[4rem] md:text-6xl p-2 pr-0 md:p-5 ml-2 md:ml-5 font-bold">Expericence</h1>
            <p className="text-slate-500 pl-4 ml-1 md:pl-5 md:ml-6 mb-5 uppercase">WEB DEVELOPER <br /> mimialist    ui</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;