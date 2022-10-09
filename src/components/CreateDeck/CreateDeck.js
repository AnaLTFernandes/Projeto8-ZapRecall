import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { postDeck } from "../../services/zaprecall";

import Form from "./Form/Form";
import SectionQuantity from "./Sections/SectionQuantity";
import SectionFlashcard from "./Sections/SectionFlashcard";

import backImg from "../assets/images/arrow-back-outline.svg";

import "./CreateDeck.css";

export default function CreateDeck() {
	const [disabled, setDisabled] = useState(false);
	const [form, setForm] = useState({});

	const navigate = useNavigate();

	const hasKey = JSON.parse(localStorage.getItem("zaprecall"));
	const quantityFlashcard = {};

	useEffect(() => {
		if (!hasKey) {
			navigate("/");
		}
	}, []);

	function updateForm({ name, value }) {
		setForm({ ...form, [name]: value });
	}

	function handleQuantity(event) {
		event.preventDefault();

		const cards = [];

		for (let i = 0; i < quantityFlashcard.quantity; i++) {
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

	return hasKey ? (
		<>
			<Link to="/" className="arrow-back">
				<img src={backImg} alt="return" />
			</Link>

			<main>
				<Form onSubmit={handleQuantity}>
					<SectionQuantity quantityFlashcard={quantityFlashcard} form={form} />
				</Form>

				<Form onSubmit={handleForm}>
					<SectionFlashcard
						form={form}
						updateForm={updateForm}
						disabled={disabled}
					/>
				</Form>
			</main>
		</>
	) : (
		<></>
	);
}
