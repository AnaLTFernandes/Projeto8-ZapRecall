import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { postSignUp } from "../../services/zaprecall";
import Loading from "../common/Loading";
import Form from "./Form";

export default function SignUp() {
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

		if (form.password !== form.confirmPassword || form.password.length < 4) {
			window.alert("As senhas devem ser iguais e ter no mínimo 4 caracteres.");

			setDisabled(false);
		} else {
			const promise = postSignUp(form);

			promise.catch((error) => {
				window.alert(error.response.data.message);

				setDisabled(false);
			});

			promise.then(() => {
				navigate("/sign-in");
			});
		}
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

			<input
				required
				type="password"
				name="confirmPassword"
				placeholder="Confirme a senha"
				onChange={(e) =>
					updateForm({ name: e.target.name, value: e.target.value })
				}
				disabled={disabled}
			></input>

			<button disabled={disabled}>
				{disabled ? <Loading size="40px" /> : "Cadastrar"}
			</button>

			<Link to="/sign-in">Já tem uma conta? Entre!</Link>

			<Link to="/" className="link-return">
				Página principal
			</Link>
		</Form>
	);
}
