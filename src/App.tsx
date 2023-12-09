import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="max-w-5xl flex items-center content-center">
        <Hero />
      </div>
    </>
  );
}

export default App;
