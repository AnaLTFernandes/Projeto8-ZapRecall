import { Link } from "react-router-dom";
import { useEffect } from "react";

import { getDecks } from "../../services/zaprecall";

import logoIMG from "../assets/images/logo.png";
import login from "../assets/images/enter-outline.svg";
import logout from "../assets/images/exit-outline.svg";

import "./InitialScreen.css";

export default function InitialScreen({
	update,
	setUpdate,
	decks,
	setDecks,
	choosenDeck,
	setChoosenDeck,
}) {
	const hasKey = JSON.parse(localStorage.getItem("zaprecall"));

	useEffect(() => {
		const promise = getDecks();

		promise.catch(() => {
			window.alert(
				"Não foi possível buscar os decks, por favor recarregue a página."
			);
		});

		promise.then((response) => {
			setDecks(response.data);
		});
	}, [hasKey]);

	function logOut() {
		localStorage.removeItem("zaprecall");
		setUpdate(!update);
	}

	return (
		<>
			{hasKey ? (
				<img className="access" src={logout} alt="logout" onClick={logOut} />
			) : (
				<Link to="/sign-in" className="access">
					<img src={login} alt="login" />
				</Link>
			)}

			<div className="initial-screen">
				<img src={logoIMG} alt="ZapRecall" />

				<h1>ZapRecall</h1>

				<select
					value={choosenDeck}
					onChange={(e) => setChoosenDeck(e.target.value)}
				>
					{decks.map((deck, index) => (
						<option key={index} value={index}>
							{deck.name}
						</option>
					))}
				</select>

				<Link to={hasKey ? "/create" : ""}>
					<button disabled={hasKey ? false : true}>Criar baralho</button>
				</Link>

				{hasKey ? (
					<span></span>
				) : (
					<span>Para criar seus baralhos, faça o login.</span>
				)}

				<Link to={decks.length > 0 ? "/deck" : ""}>
					<div className="button-start">Iniciar Recall!</div>
				</Link>
			</div>
		</>
	);
}
