import { useState } from "react";
import type { TextInputProps } from "../../types";

const TextInput = ({ onTextChange, placeholder = "", initialValue = "" }: TextInputProps) => {
	const [value, setValue] = useState(initialValue);

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newText = e.target.value;
		setValue(newText);
		onTextChange(newText);
	};

	return (
		<>
			<label htmlFor="text-input" className="block mb-3 text-xl">Writing Tool</label>
			<textarea
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				className="w-full min-h-37.5 resize-y mb-8 bg-white text-black"
				rows={6}
				cols={60}
			/>
		</>
	);
};

export default TextInput;
