import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";
function getRandomAnimal() {
	const animals = ["bird", "cat", "cow", "horse", "dog", "gator"];
	return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
	const [animals, addAnimal] = useState([]);
	const handleClick = () => {
		// animals.push(getrandomAnimal()) this modifies a piece of state
		// lets say any past state gets modifies other state values will aslo modify
		// so for every state we provide a new array
		addAnimal([...animals, getRandomAnimal()]);
	};

	const renderedAnimals = animals.map((animal, index) => {
		return <AnimalShow type={animal} key={index} />;
	});
	return (
		<div className="app">
			<button className="addBtn" onClick={handleClick}>Add Animal</button>
			<div className="animal-list">{renderedAnimals}</div>
		</div>
	);
}

export default App;
