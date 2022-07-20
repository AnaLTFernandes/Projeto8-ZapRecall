import Deck from './Deck';

export default function DeckScreen() {
    return (
        <div className="deck-screen">
            <div className="top-deck-screen">
                <img src="./images/logo.png" alt="ZapRecall"/>
                <h1>ZapRecall</h1>
            </div>
            <Deck />
            <div className="deck-progress">0/4 CONCLUÍDOS</div>
        </div>
    );
}