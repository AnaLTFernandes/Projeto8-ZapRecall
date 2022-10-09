import CreateFlashcard from "../CreateFlashcard";

export default function SectionFlashcard({ form, updateForm, disabled }) {
	return (
		<>
			<h1>Flashcards</h1>

			<div className="horizontal-div"></div>

			{form.cards?.length > 0 ? (
				<>
					<input
						required
						type="text"
						name="name"
						autoComplete="false"
						placeholder="Nome do baralho"
						className="input-minor deck-name"
						onChange={(e) =>
							updateForm({ name: e.target.name, value: e.target.value })
						}
					></input>

					{form.cards.map((card, index) => (
						<CreateFlashcard key={index} index={index} card={card} />
					))}

					<input
						required
						type="password"
						name="password"
						autoComplete="false"
						placeholder="Senha de usuário"
						className="input-minor user-password"
						onChange={(e) =>
							updateForm({ name: e.target.name, value: e.target.value })
						}
					></input>

					<button disabled={form.password && !disabled ? false : true}>
						Criar baralho
					</button>
				</>
			) : (
				<></>
			)}
		</>
	);
}
