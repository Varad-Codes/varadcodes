import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="flex items-center content-center">
      <div className="max-w-8xl ">
        <Hero />
      </div>
      </div>
    </>
  );
}

export default App;
