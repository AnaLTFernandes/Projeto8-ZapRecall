import { Link } from "react-router-dom";
import logoIMG from "../assets/images/logo.png";
import login from "../assets/images/enter-outline.svg";
import logout from "../assets/images/exit-outline.svg";

import "./InitialScreen.css";

export default function InitialScreen({ update, setUpdate }) {
	const hasKey = localStorage.getItem("zaprecall");

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

				<Link to="/deck">
					<div className="button-start">Iniciar Recall!</div>
				</Link>
			</div>
		</>
	);
}
