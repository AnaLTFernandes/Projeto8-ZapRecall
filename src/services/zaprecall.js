import axios from "axios";

const BASE_URI = "https://zap-recall.herokuapp.com";

function getDecks() {
	const promise = axios.get(`${BASE_URI}/decks`);
	return promise;
}

function postLogin(body) {
	const promise = axios.post(`${BASE_URI}/sign-in`, body);
	return promise;
}

export { getDecks, postLogin };
