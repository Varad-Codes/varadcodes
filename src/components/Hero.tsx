import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="hero bg-hero-pattern  rounded-xl text-center p-5 md:mt-[20vh] md:m-12 flex flex-col md:flex-row justify-center">
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        className="bg-[#00000b33] rounded-xl backdrop-blur-md mt-8 md:ml-8"
      >
        <h1 className="text-[5.5rem] md:text-9xl p-2 pr-0 md:p-5 ml-2 md:ml-5 font-bold">Varad <br /> Sharma</h1>
        <p className="text-slate-600 pl-4 ml-1 md:pl-5 md:ml-6 mb-5 uppercase">WEB DEVELOPER <br /> mimialist    ui</p>
      </motion.div>
      {/* <div className="-mt-12"> */}
      {/*   <img src="/logo-trans.png" alt="Varad Sharma" className="float-right md:ml-[45vw]" /> */}
      {/* </div> */}
    </div>
  );
};

export default Hero;
