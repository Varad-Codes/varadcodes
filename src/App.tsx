import Hero from "./components/Hero";
import Backdrop from "./components/const/Backdrop";
import { useRef } from "react";

import './App.css';
import Introduction from "./components/Introduction";
import Qualification from "./components/Qualification";
import Exp from "./components/Exp";
import Contact from "./components/Contact";

function App() {
    const ScrollInfo = useRef(null);
    // useScrollSnap({ ref: ScrollInfo, duration: 100 });

    return (
        <section>
            <div >
                <div className="h-screen">
                    <Backdrop />
                    <Hero />
                </div>
                <div ref={ScrollInfo} className="h-screen md:h-[30vh]">
                    <Introduction />
                </div>
                <div ref={ScrollInfo} className="h-screen md:h-[30vh]">
                    <Qualification />
                </div>
                <div ref={ScrollInfo} className="h-screen md:h-[40vh]">
                    <Exp />
                </div>
                <div ref={ScrollInfo} className="h-screen md:h-[40vh]">
                    <Contact />
                </div>
            </div>
        </section>
    );
}

export default App;