import partyIMG from "../assets/images/party.png";
import sadIMG from "../assets/images/sad.png";

import "./DeckProgress.css";

export default function DeckProgress({ progress, total, iconsResult }) {
	let allRigth = true;

	iconsResult.forEach(({ iconClass }) => {
		if (iconClass === "incorrect") {
			allRigth = false;
		}
	});

	function messageResult() {
		const { img, title, text } = allRigth
			? {
					img: partyIMG,
					title: "Parabéns!",
					text: "Você não esqueceu de nenhum flashcard!",
			  }
			: {
					img: sadIMG,
					title: "Putz...",
					text: "Ainda faltam alguns... Mas não desanime!",
			  };

		return (
			<div className="result">
				<span>
					<img src={img} alt={title} />
					{title}
				</span>

				<div>{text}</div>
			</div>
		);
	}

	return (
		<div
			className={`deck-progress ${progress === total ? "end-game" : ""}`.trim()}
		>
			{progress === total ? messageResult() : ""}

			<div className="status-progress">
				{progress}/{total} CONCLUÍDOS
			</div>

			<div className="icons-progress">
				{iconsResult.map(({ iconName, iconClass }, index) => (
					<ion-icon
						key={index}
						class={iconClass}
						name={`${iconName}-circle`}
					></ion-icon>
				))}
			</div>
		</div>
	);
}
