import Hero from './components/Hero';
import Backdrop from './components/const/Backdrop';
import Intro from './components/Intro';

import './App.css';
import { useRef } from 'react';
import useScrollSnap from 'react-use-scroll-snap';

function App() {
    const ScrollSnap = useRef(null);
    useScrollSnap({ ref: ScrollSnap, duration: 100 });

  return (
    <section className=''>
        <div className='h-screen'>
            <Backdrop />
            <Hero />
        </div>
        <div ref={ScrollSnap}>
            <Intro  />
        </div>
    </section>
  )
}

export default App;
