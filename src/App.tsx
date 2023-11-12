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
    useScrollSnap({ ref: ScrollInfo, duration: 50 });

    const ScrollStack = useRef(null);
    useScrollSnap({ ref: ScrollStack, duration: 50 });

    const ScrollExp = useRef(null);
    useScrollSnap({ ref: ScrollExp, duration: 50 });

    const ScrollContact = useRef(null);
    useScrollSnap({ ref: ScrollContact, duration: 50 });

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
                <div ref={ScrollStack} className="h-screen">
                    <Qualification />
                </div>
                <div ref={ScrollExp} className="h-screen">
                    <Exp />
                </div>
                <div  className="h-screen">
                    <Contact />
                </div>
            </div>
        </section>
    );
}

export default App;