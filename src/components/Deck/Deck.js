import Flashcard from "../Flashcard/Flashcard";
import deckArray from "./DecksArray";

import "./Deck.css";

const deck = deckArray();

function sort() {
	deck.sort(() => Math.random() - 0.5);
}

sort();

export default function Deck({
	setTotal,
	progress,
	setProgress,
	setIconsResult,
	iconsResult,
}) {
	setTotal(deck.length);

	return (
		<main className="deck">
			{deck.map((flashcard, index) => (
				<Flashcard
					{...flashcard}
					index={index}
					key={index}
					progress={progress}
					setProgress={setProgress}
					iconsResult={iconsResult}
					setIconsResult={setIconsResult}
				/>
			))}
		</main>
	);
}
