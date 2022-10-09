import axios from "axios";

const BASE_URI = "https://zap-recall.herokuapp.com";

function createHeaders() {
	const key_access = JSON.parse(localStorage.getItem("zaprecall"))?.key_access;

	const config = {};

	if (key_access) {
		config.headers = {
			Key_Access: key_access,
		};
	}

	return config;
}

function getDecks() {
	const config = createHeaders();

	const promise = axios.get(`${BASE_URI}/decks`, config);

	return promise;
}

function postDeck(body) {
	const config = createHeaders();

	const promise = axios.post(`${BASE_URI}/decks`, body, config);

	return promise;
}

function postSignIn(body) {
	const promise = axios.post(`${BASE_URI}/sign-in`, body);
	return promise;
}

function postSignUp(body) {
	const promise = axios.post(`${BASE_URI}/sign-up`, body);
	return promise;
}

export { getDecks, postDeck, postSignIn, postSignUp };
