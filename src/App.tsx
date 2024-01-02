import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Navbar";
import { createContext } from "react";

export const themeCtx = createContext('light')

function App() {

  return (
    <>
      <themeCtx.Provider value="light">
        <Nav />
      </themeCtx.Provider>
      <div className="flex flex-col items-center content-center">
        <div className="max-w-8xl">
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;