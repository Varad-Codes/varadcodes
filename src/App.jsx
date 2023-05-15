import AboutMe from "./components/AboutMe"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Socials from "./components/Socials"
import TechStack from "./components/TechStack"

function App() {

	return (
		<>
			<div>
				<Hero />
				<br />
				<br />
				<br />
			</div>

			{/* here lies the terminal interactions */}
			<div className="ml-10px">
				<AboutMe />
				<TechStack />
				<Experience />
				<Education />
				<Projects />
				<Socials />
			</div>
		</>
	)
}

export default App
