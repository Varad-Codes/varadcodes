const Hero = () => {
  return (
    <div className="hero md:mt-[20vh] flex flex-col md:flex-row justify-between">
      <div className="mt-8 md:ml-8">
        <h1 className="text-[5.5rem] md:text-9xl p-2 pr-0 md:p-5 ml-2 md:ml-5 font-bold">Varad <br /> Sharma</h1>
        <p className="text-slate-600 pl-4 ml-1 md:pl-5 md:ml-6 mb-5">FULLSTACK WEB DEVELOPER</p>
      </div>
      <div className="-mt-12">
        <img src="/logo-trans.png" alt="Varad Sharma" className="float-right md:ml-[45vw]"/>
      </div>
    </div>
  );
};

export default Hero;
