import AboutMe from "./components/AboutMe"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
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
			</div>
		</>
	)
}

export default App
