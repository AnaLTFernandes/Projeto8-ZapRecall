import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import DeckScreen from "../DeckScreen/DeckScreen";
import InitialScreen from "../InitialScreen/InitialScreen";

import "./css/reset.css";
import "./css/style.css";

export default function App() {
	const [update, setUpdate] = useState(false);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<InitialScreen update={update} setUpdate={setUpdate} />}
				/>

				<Route path="/deck" element={<DeckScreen />} />
			</Routes>
		</BrowserRouter>
	);
}
