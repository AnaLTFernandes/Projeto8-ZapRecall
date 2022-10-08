export default function createNewDeck(cards) {
	let random = Math.floor(Math.random() * 15);

	const deck = cards.map((card) => ({
		...card,
		status: "",
		result: "",
	}));

	if (random < deck.length) {
		deck[random].secret = true;
	}

	return deck.sort(() => Math.random() - 0.5);
}
