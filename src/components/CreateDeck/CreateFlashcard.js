export default function CreateFlashcard({ index, card }) {

	return (
		<section>
			<h2>Flashcard {index + 1}</h2>

			<input
				autoComplete="false"
				required
				type="text"
				placeholder="Frente"
				onChange={(e) => (card.question = e.target.value)}
			></input>

			<input
				autoComplete="false"
				required
				type="text"
				placeholder="Verso"
				onChange={(e) => (card.answer = e.target.value)}
			></input>
		</section>
	);
}
