import { motion } from 'framer-motion';

const Hero = () => {
 // useEffect(() => { // Moved to CSS animations
  //   const angle = Math.random() * 360;
  //   console.log(angle);
  //   if (bgGradient.current) {
  //     bgGradient.current.style.background = `radial-gradient(${angle} at 50% 50%, #0047FF 0%, rgba(0, 71, 255, 0.36) 29.69%, rgba(0, 71, 255, 0.00) 58.33%)`;
  //   }
  // });

  return (
    <div className="hero rounded-xl text-center p-5 md:mt-[15vh] md:m-10 flex flex-col justify-center">
      <div className="hero-bg flex content-center justify-center h-[50vh] md:h-[90vh] w-screen md:w-[90vw] -z-10 absolute" ></div>
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        className="mt-8 md:ml-8"
      >
        <h1 className="text-[5.5rem] md:text-9xl p-2 pr-0 md:p-5 ml-2 md:ml-5 font-bold">Varad <br /> Sharma</h1>
        <p className="text-slate-500 pl-4 ml-1 md:pl-5 md:ml-6 mb-5 uppercase">WEB DEVELOPER <br /> mimialist    ui</p>
      </motion.div>
    </div>
  );
};

export default Hero;