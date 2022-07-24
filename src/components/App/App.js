import { useState } from 'react';
import DeckScreen from '../DeckScreen/DeckScreen';
import InitialScreen from '../InitialScreen/InitialScreen';

import './css/reset.css';
import './css/style.css';

export default function App() {
    const [isInitialScreen, setIsInitialScreen] = useState(true);

    return (
        <>
            {isInitialScreen
                ? <InitialScreen setIsInitialScreen={setIsInitialScreen}/>
                : <DeckScreen setIsInitialScreen={setIsInitialScreen}/>
            }
        </>
    );
};