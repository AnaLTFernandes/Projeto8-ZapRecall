import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { postDeck } from "../../services/zaprecall";
import Form from "./Form";
import CreateFlashcard from "./CreateFlashcard";

import back from "../assets/images/arrow-back-outline.svg";

import "./CreateDeck.css";

export default function CreateDeck() {
	const [disabled, setDisabled] = useState(false);
	const [form, setForm] = useState({});

	const navigate = useNavigate();

	const hasKey = JSON.parse(localStorage.getItem("zaprecall"));
	let quantity;

	useEffect(() => {
		if (!hasKey) {
			navigate("/");
		}
	}, []);

	function handleQuantity(event) {
		event.preventDefault();

		const cards = [];

		for (let i = 0; i < quantity; i++) {
			cards.push({});
		}

		updateForm({ name: "cards", value: cards });
	}

	function handleForm(event) {
		event.preventDefault();

		setDisabled(true);

		const promise = postDeck(form);

		promise.catch(() => {
			window.alert(
				"Não foi possível criar o baralho, por favor verifique os dados."
			);

			setDisabled(false);
		});

		promise.then(() => {
			navigate("/");
		});
	}

	function updateForm({ name, value }) {
		setForm({ ...form, [name]: value });
	}

	return hasKey ? (
		<>
			<Link to="/" className="arrow-back">
				<img src={back} alt="return" />
			</Link>

			<main>
				<Form onSubmit={handleQuantity}>
					<h1>Quantidade de flashcards</h1>

					<div className="horizontal-div"></div>

					<input
						required
						type="number"
						placeholder="Insira um número entre 4 e 10"
						min="2"
						max="10"
						className="input-minor"
						onChange={(e) => (quantity = e.target.value)}
						disabled={form.cards ? true : false}
					></input>

					<span>Não é possível mudar depois de escolher.</span>

					<button disabled={form.cards ? true : false}>OK</button>
				</Form>

				<Form onSubmit={handleForm}>
					<h1>Flashcards</h1>

					<div className="horizontal-div"></div>

					{form.cards?.length > 0 ? (
						<>
							<input
								autoComplete="false"
								required
								type="text"
								name="name"
								placeholder="Nome do baralho"
								onChange={(e) =>
									updateForm({ name: e.target.name, value: e.target.value })
								}
								className="input-minor deck-name"
							></input>

							{form.cards.map((card, index) => (
								<CreateFlashcard key={index} index={index} card={card} />
							))}

							<input
								autoComplete="false"
								required
								type="password"
								name="password"
								placeholder="Senha de usuário"
								onChange={(e) =>
									updateForm({ name: e.target.name, value: e.target.value })
								}
								className="input-minor user-password"
							></input>

							<button disabled={form.password && !disabled ? false : true}>
								Criar baralho
							</button>
						</>
					) : (
						<></>
					)}
				</Form>
			</main>
		</>
	) : (
		<></>
	);
}
