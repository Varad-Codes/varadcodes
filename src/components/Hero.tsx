import Prompt from "./const/Prompt";

const Hero = () => {
    return (
        <section className="hero transition flex flex-col md:flex-row">    
            <div className="hero-content text-7xl pr-12 m-5 hover:shadow-xl">
                <Prompt cmd="welcome" />
                <h1 className="">Hi,</h1>
                <h1 className="">I'm Varad Sharma</h1>
            </div>
            <div>
                <div className="hero-image hero-content m-5 rounded-full hover:shadow-xl">
                    <img src="/me.png" alt="hero" className="rounded"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;