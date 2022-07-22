import { useState } from 'react';
import Deck from './Deck';

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
            
            <main className="deck-progress">
                {progress}/{total} CONCLUÍDOS
                <div className='icons-progress'>
                    {iconsResult.map(({iconName, iconClass}) => <ion-icon class={iconClass} name={`${iconName}-circle`}></ion-icon>)}
                </div>
            </main>
        </div>
    );
}