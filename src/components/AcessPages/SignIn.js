import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { postSignIn } from "../../services/zaprecall";
import Loading from "../common/Loading";
import Form from "./Form";

export default function SignIn() {
	const [form, setForm] = useState({});
	const [disabled, setDisabled] = useState(false);

	const navigate = useNavigate();

	function updateForm({ name, value }) {
		setForm({
			...form,
			[name]: value,
		});
	}

	function handleForm(event) {
		event.preventDefault();

		setDisabled(true);

		const promise = postSignIn(form);

		promise.catch((error) => {
			window.alert(error.response.data.message);

			setDisabled(false);
		});

		promise.then((response) => {
			localStorage.setItem(
				"zaprecall",
				JSON.stringify({ key_access: response.data.key_access })
			);
			navigate("/");
		});
	}

	return (
		<Form onSubmit={handleForm}>
			<input
				required
				type="text"
				name="username"
				placeholder="Nome de usuário"
				onChange={(e) =>
					updateForm({ name: e.target.name, value: e.target.value })
				}
				disabled={disabled}
			></input>

			<input
				required
				type="password"
				name="password"
				placeholder="Senha"
				onChange={(e) =>
					updateForm({ name: e.target.name, value: e.target.value })
				}
				disabled={disabled}
			></input>

			<button disabled={disabled}>
				{disabled ? <Loading size="40px" /> : "Entrar"}
			</button>

			<Link to="/sign-up">Não tem uma conta? Cadastre-se!</Link>
			<Link to="/" className="link-return">
				Voltar
			</Link>
		</Form>
	);
}
