import { useState } from "react";
import { Link } from "react-router-dom";

import Deck from "../Deck/Deck";
import DeckProgress from "../DeckProgress/DeckProgress";

import logoIMG from "../assets/images/logo.png";
import back from "../assets/images/arrow-back-outline.svg";

import "./DeckScreen.css";


export default function DeckScreen({ update, setUpdate, deck }) {
	const [progress, setProgress] = useState(0);
	const [iconsResult, setIconsResult] = useState([]);

	const total = deck.length;

	return (
		<div className="deck-screen">
			<Link to="/" className="arrow-back">
				<img src={back} alt="return" />
			</Link>

			<header className="top-deck-screen">
				<img src={logoIMG} alt="ZapRecall" />
				<h1>ZapRecall</h1>
			</header>

			<Deck
				deck={deck}
				progress={progress}
				setProgress={setProgress}
				iconsResult={iconsResult}
				setIconsResult={setIconsResult}
			/>

			<DeckProgress
				progress={progress}
				total={total}
				iconsResult={iconsResult}
			/>
		</div>
	);
}
