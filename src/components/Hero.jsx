import { TypeAnimation } from "react-type-animation";

const ACIIArt = _ => {
    return (
        <>
            <p id="ascii-art">

                ░██╗░░░░░░░██╗███████╗██╗░░░░░░█████╗░░█████╗░███╗░░░███╗███████╗
                ░██║░░██╗░░██║██╔════╝██║░░░░░██╔══██╗██╔══██╗████╗░████║██╔════╝
                ░╚██╗████╗██╔╝█████╗░░██║░░░░░██║░░╚═╝██║░░██║██╔████╔██║█████╗░░
                ░░████╔═████║░██╔══╝░░██║░░░░░██║░░██╗██║░░██║██║╚██╔╝██║██╔══╝░░
                ░░╚██╔╝░╚██╔╝░███████╗███████╗╚█████╔╝╚█████╔╝██║░╚═╝░██║███████╗
                ░░░╚═╝░░░╚═╝░░╚══════╝╚══════╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚══════╝

            </p>
        </>
    );
};

const Hero = _ => {
    return (
        <>
            <div className="text-center">
                <ACIIArt />
                <p className="text-2xl">Varad <span className="text-blue">"f4ster"</span> Sharma</p>
                {/* <p>A weeb, a programmer, Arch Linux user</p> */}
                <TypeAnimation
                    sequence={[
                        "A Weeb",
                        1500,
                        "A Programmer",
                        1500,
                        "Arch Linux User",
                        1500,
                        "A Weeb, A Programmer, A Arch Linux User",
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={0}
                    cursor={false}
                />

            </div>
        </>
    );
};

export default Hero;