const decks = [
	[
		{
			question: "O que é JSX?",
			answer: "Uma extensão de linguagem do JavaScript",
			status: "",
			result: "",
		},
		{
			question: "O React é __ ",
			answer: "uma biblioteca JavaScript para construção de interfaces",
			status: "",
			result: "",
		},
		{
			question: "Componentes devem iniciar com __",
			answer: "letra maiúscula",
			status: "",
			result: "",
		},
		{
			question: "Podemos colocar __ dentro do JSX ",
			answer: "expressões",
			status: "",
			result: "",
		},
		{
			question: "O ReactDOM nos ajuda __ ",
			answer: " interagindo com a DOM para colocar componentes React na mesma",
			status: "",
			result: "",
		},
		{
			question: "Usamos o npm para __ ",
			answer: "gerenciar os pacotes necessários e suas dependências",
			status: "",
			result: "",
		},
		{
			question: "Usamos props para __ ",
			answer: "passar diferentes informações para componentes",
			status: "",
			result: "",
		},
		{
			question: "Usamos estado (state) para __ ",
			answer:
				"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
			status: "",
			result: "",
		},
	],
	[
		{
			question: "犬は庭にいる",
			answer: "O cachorro está no quintal",
			status: "",
			result: "",
		},
		{
			question: "Reactが大好き",
			answer: "Adoro React",
			status: "",
			result: "",
		},
		{
			question: "猫が箱にいりました",
			answer: "O gato estava na caixa",
			status: "",
			result: "",
		},
		{
			question: "日本語を勉強するのは楽しいですね",
			answer: "É divertido estudar japonês",
			status: "",
			result: "",
		},
		{
			question: "今日は火曜日ですか",
			answer: "É terça-feira hoje?",
			status: "",
			result: "",
		},
		{
			question: "日本へ行きたい",
			answer: "Eu quero ir para o Japão",
			status: "",
			result: "",
		},
		{
			question: "今日は元気ですか",
			answer: "Como você está hoje?",
			status: "",
			result: "",
		},
	],
];

export default function DecksArray() {
	let random;

	do {
		random = Math.round(Math.random() * 10);
	} while (random > decks.length - 1);

	const deck = decks[random];

	random = Math.floor(Math.random() * 10);

	if (random < deck.length) {
		deck[random].secret = true;
	}

	return deck;
}
