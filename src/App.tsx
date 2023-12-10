import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Nav from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="flex flex-col items-center content-center">
        <div className="max-w-8xl ">
          <Hero />
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
