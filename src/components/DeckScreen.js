import { useState } from 'react';
import Deck from './Deck';
import DeckProgress from './DeckProgress';

export default function DeckScreen() {
    const [total, setTotal] = useState(0);
    const [progress, setProgress] = useState(0);
    const [iconsResult, setIconsResult] = useState([]);

    return (
        <div className="deck-screen">
            <header className="top-deck-screen">
                <img src="./images/logo.png" alt="ZapRecall"/>
                <h1>ZapRecall</h1>
            </header>

            <Deck setTotal={setTotal} progress={progress} setProgress={setProgress} iconsResult={iconsResult} setIconsResult={setIconsResult}/>
            
            <DeckProgress progress={progress} total={total} iconsResult={iconsResult}/>
        </div>
    );
}