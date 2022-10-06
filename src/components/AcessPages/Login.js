import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { postLogin } from "../../services/zaprecall";
import Form from "./Form";

export default function Login() {
	const [form, setForm] = useState({});

	const navigate = useNavigate();

	function updateForm({ name, value }) {
		setForm({
			...form,
			[name]: value,
		});
	}

	function handleForm(event) {
		event.preventDefault();

		const promise = postLogin(form);

		promise.catch((response) => {
			window.alert(response.response.data.message);
		});

		promise.then(() => {
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
			></input>

			<input
				required
				type="password"
				name="password"
				placeholder="Senha"
				onChange={(e) =>
					updateForm({ name: e.target.name, value: e.target.value })
				}
			></input>

			<button>Entrar</button>

			<Link to="/sign-up">Não tem uma conta? Cadastre-se!</Link>
			<Link to="/" className='link-return'>Voltar</Link>
		</Form>
	);
}
