import { useState } from "react";

import Flashcard from "../Flashcard/Flashcard";
import createNewDeck from "../Deck/createNewDeck";

import "./Deck.css";

export default function Deck({
	deck,
	progress,
	setProgress,
	setIconsResult,
	iconsResult,
}) {
	const [newDeck, setNewDeck] = useState(createNewDeck(deck));

	return (
		<main className="deck">
			{newDeck.map((flashcard, index) => (
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
