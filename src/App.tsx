import "./App.css";
import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter";

function App() {
	return (
		<>
			<CharacterCounter
				minWords={25}
				maxWords={200}
				targetReadingTime={.5}
			/>
		</>
	);
}

export default App;
