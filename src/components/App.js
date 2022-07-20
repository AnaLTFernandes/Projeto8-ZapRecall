import React from 'react';
import DeckScreen from './DeckScreen';

export default function App() {
    const [isInitialScreen, setIsInitialScreen] = React.useState(true);
    return (
        <>
            {isInitialScreen
                ?
                <div className="initial-screen">
                    <img src="./images/logo.png" alt="ZapRecall"/>
                    <h1>ZapRecall</h1>
                    <div className="button-start" onClick={() => setIsInitialScreen(false)}>Iniciar Recall!</div>
                </div>
                : <DeckScreen />}
        </>
    );
}