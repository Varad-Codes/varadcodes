import Hero from "./components/Hero";
import Backdrop from "./components/const/Backdrop";
// import Intro from "./components/sub/Intro";

import "./App.css";
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import Introduction from "./components/Introduction";
import Qualification from "./components/Qualification";

function App() {
    const ScrollSnap = useRef(null);
    useScrollSnap({ ref: ScrollSnap, duration: 100 });

    return (
        <section className="">
            <div className="h-screen">
                <div className="h-screen">
                    <Backdrop />
                    <Hero />
                </div>
                <div ref={ScrollSnap} className="h-screen">
                    <Introduction />
                </div>
                <div ref={ScrollSnap} className="h-screen">
                    <Qualification />
                </div>
            </div>
        </section>
    );
}

export default App;
