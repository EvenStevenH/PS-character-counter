import "./App.css";
import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter";

export default function App() {
	return (
		<>
			<CharacterCounter
				minWords={25}
				maxWords={200}
				targetReadingTime={0.5}
			/>
		</>
	);
}
