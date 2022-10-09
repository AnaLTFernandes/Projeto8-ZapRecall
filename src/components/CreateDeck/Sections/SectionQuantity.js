export default function SectionQuantity({ quantityFlashcard, form }) {
	return (
		<>
			<h1>Quantidade de flashcards</h1>

			<div className="horizontal-div"></div>

			<input
				required
				type="number"
				min="4"
				max="10"
				className="input-minor"
				placeholder="Insira um número entre 4 e 10"
				disabled={form.cards ? true : false}
				onChange={(e) => (quantityFlashcard.quantity = e.target.value)}
			></input>

			<span>Não é possível mudar depois de escolher.</span>

			<button disabled={form.cards ? true : false}>OK</button>
		</>
	);
}
