import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Navbar";


function App() {

  return (
    <div id="main" className="">
      <div>
        <Nav />
      </div>
      <div className="flex flex-col items-center content-center">
        <div className="max-w-8xl">
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;