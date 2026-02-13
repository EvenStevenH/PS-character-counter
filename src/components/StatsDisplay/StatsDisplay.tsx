import type { StatsDisplayProps } from "../../types";

const StatsDisplay = ({ stats, showReadingTime = false, isWordCountValid = true, isReadingTimeValid = true }: StatsDisplayProps) => {
	return (
		<section>
			<ul
				className="flex flex-wrap justify-around items-center gap-8"
				aria-live="polite"
			>
				<li>
					<h2>Characters</h2>
					<p>{stats.characterCount}</p>
				</li>

				<li>
					<h2>Words</h2>
					<p
						style={{
							color: isWordCountValid ? "green" : "red",
						}}
					>
						{stats.wordCount}
					</p>
				</li>

				{showReadingTime && (
					<li>
						<h2>Reading Time</h2>
						<p
							style={{
								color: isReadingTimeValid ? "green" : "red",
							}}
						>
							{stats.readingTime} minutes
						</p>
					</li>
				)}
			</ul>
		</section>
	);
};

export default StatsDisplay;
