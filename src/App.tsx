import Hero from "./components/Hero";
import Backdrop from "./components/const/Backdrop";

import "./App.css";
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import Introduction from "./components/Introduction";
import Qualification from "./components/Qualification";
import Exp from "./components/Exp";
import Contact from "./components/Contact";

function App() {
    const ScrollInfo = useRef(null);
    useScrollSnap({ ref: ScrollInfo, duration: 100 });

    return (
        <section>
            <div >
                <div className="h-screen">
                    <Backdrop />
                    <Hero />
                </div>
                <div ref={ScrollInfo} className="h-screen">
                    <Introduction />
                </div>
                <div ref={ScrollInfo} className="h-screen">
                    <Qualification />
                </div>
                <div ref={ScrollInfo} className="h-screen">
                    <Exp />
                </div>
                <div ref={ScrollInfo} className="h-screen">
                    <Contact />
                </div>
            </div>
        </section>
    );
}

export default App;