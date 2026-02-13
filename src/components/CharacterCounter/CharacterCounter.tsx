import { useState } from "react";
import type { CharacterCounterProps, TextStats } from "../../types";
import StatsDisplay from "../StatsDisplay/StatsDisplay.tsx";
import TextInput from "../TextInput/TextInput.tsx";

// parent component
export const CharacterCounter: React.FC<CharacterCounterProps> = ({ minWords = 0, maxWords = 0, targetReadingTime = 0 }) => {
	const [textInput, setTextInput] = useState<string>("");

	// callback
	const handleTextChange = (value: string) => {
		setTextInput(value);
	};

	// stats
	const words = textInput.trim().split(" ").length;
	const wordCount = words;
	const stats: TextStats = {
		characterCount: textInput.length,
		wordCount: textInput ? words : 0,
		readingTime: textInput ? parseFloat((words / 200).toFixed(2)) : 0, // average is 200 wpm,
	};

	// goals
	const isWordCountValid = (minWords ? wordCount >= minWords : true) && (maxWords ? wordCount <= maxWords : true);
	const isReadingTimeValid = targetReadingTime ? stats.readingTime >= targetReadingTime : true;

	return (
		<>
			<div className="max-w-150 mx-auto p-4">
				<TextInput
					onTextChange={handleTextChange}
					placeholder="Start typing your content here..."
				/>

				<StatsDisplay
					stats={stats}
					showReadingTime
					isWordCountValid={isWordCountValid}
					isReadingTimeValid={isReadingTimeValid}
				/>

				<div className="mt-2">
					{minWords > 0 && (
						<p>
							Min: {minWords} | Max: {maxWords} | Target: {targetReadingTime} min.
						</p>
					)}
				</div>

				<span>{isWordCountValid && isReadingTimeValid ? "You've met the goals!" : "Not enough words!"}</span>
			</div>
		</>
	);
};
