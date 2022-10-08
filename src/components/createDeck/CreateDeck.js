import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { postDeck } from "../../services/zaprecall";
import Form from "./Form";

import back from "../assets/images/arrow-back-outline.svg";

import "./CreateDeck.css";

export default function CreateDeck() {
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

		updateForm({ name: 'cards', value: new Array(Number(quantity)).fill({}) })
	}

	function handleForm(event) {
		event.preventDefault();

		console.log(form);
		/*
		const promise = postDeck();

		promise.catch(() => {
			window.alert(
				"Não foi possível criar o baralho, por favor verifique os dados."
			);
		});

		promise.then((response) => {
			setDecks(response.data);
		});
        */
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
						min="4"
						max="10"
						className="number-cards"
						onChange={(e) => (quantity = e.target.value)}
						disabled={form.cards ? true : false}
					></input>

					<span>Não é possível mudar depois de escolher.</span>

					<button disabled={form.cards ? true : false}>OK</button>
				</Form>

				<Form onSubmit={handleForm}>
					<h1>Flashcards</h1>

					<div className="horizontal-div"></div>


					<input
						required
						type="number"
						placeholder="Insira um número entre 4 e 10"
						min="4"
						max="10"
						onChange={(e) => (quantity = e.target.value)}
					></input>

					<button disabled={form.password ? false : false}>
						Criar baralho
					</button>
				</Form>
			</main>
		</>
	) : (
		<></>
	);
}
