import axios from "axios";

const BASE_URI = "https://zap-recall.herokuapp.com";

function getDecks(key) {
	const config = {
		headers: {
			Key_Access: key,
		},
	};

	const promise = axios.get(`${BASE_URI}/decks`, config);

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

export { getDecks, postSignIn, postSignUp };
