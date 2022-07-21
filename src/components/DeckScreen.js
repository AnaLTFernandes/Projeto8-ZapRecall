import React from 'react';
import Deck from './Deck';

export default function DeckScreen() {
    const [total, setTotal] = React.useState(0);
    const [progress, setProgress] = React.useState(0);

    return (
        <div className="deck-screen">
            <header className="top-deck-screen">
                <img src="./images/logo.png" alt="ZapRecall"/>
                <h1>ZapRecall</h1>
            </header>
            <Deck setTotal={setTotal} progress={progress} setProgress={setProgress}/>
            <div className="deck-progress">{progress}/{total} CONCLUÍDOS</div>
        </div>
    );
}