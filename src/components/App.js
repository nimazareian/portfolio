import React from "react";
import Heading from "./Heading";
import SkillsCards from "./SkillsCards";
import Footer from "./Footer";
import NavBar from "./NavBar";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Heading />
			<SkillsCards />
			<Footer />
		</div>
	);
}

export default App;
