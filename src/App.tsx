import Hero from './components/Hero';
import Backdrop from './components/const/Backdrop';
import Intro from './components/Intro';
import Vision from './components/Vision';

import './App.css';

function App() {

  return (
    <section className=''>
        <div className='h-screen'>
            <Backdrop />
            <Hero />
        </div>

        <div className=''>
            <Intro />
            <Vision />
        </div>
    </section>
  )
}

export default App;
