import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import DeckScreen from "../DeckScreen/DeckScreen";
import InitialScreen from "../InitialScreen/InitialScreen";
import Login from "../AcessPages/Login";

import "./css/reset.css";
import "./css/style.css";

export default function App() {
	const [update, setUpdate] = useState(false);
	const [decks, setDecks] = useState([]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/sign-in" element={<Login />} />

				<Route
					path="/"
					element={
						<InitialScreen
							update={update}
							setUpdate={setUpdate}
							decks={decks}
							setDecks={setDecks}
						/>
					}
				/>

				<Route
					path="/deck"
					element={
						<DeckScreen
							update={update}
							setUpdate={setUpdate}
							decks={decks}
							setDecks={setDecks}
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}
