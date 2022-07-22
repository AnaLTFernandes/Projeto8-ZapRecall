import { useState } from 'react';
import Deck from '../Deck/Deck';
import DeckProgress from '../DeckProgress/DeckProgress';

import logoIMG from '../assets/images/logo.png';

import './DeckScreen.css'

export default function DeckScreen() {
    const [total, setTotal] = useState(0);
    const [progress, setProgress] = useState(0);
    const [iconsResult, setIconsResult] = useState([]);

    return (
        <div className="deck-screen">
            
            <header className="top-deck-screen">
                <img src={logoIMG} alt="ZapRecall"/>
                <h1>ZapRecall</h1>
            </header>

            <Deck setTotal={setTotal} progress={progress} setProgress={setProgress} iconsResult={iconsResult} setIconsResult={setIconsResult}/>
            
            <DeckProgress progress={progress} total={total} iconsResult={iconsResult}/>
        </div>
    );
}