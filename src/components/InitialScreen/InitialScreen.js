import logoIMG from '../assets/images/logo.png';

import './InitialScreen.css';

export default function InitialScreen ({ setIsInitialScreen }) {

    return (
        <div className="initial-screen">

            <img src={logoIMG} alt="ZapRecall"/>

            <h1>ZapRecall</h1>

            <div
                className="button-start"
                onClick={() => setIsInitialScreen(false)}>
                    Iniciar Recall!
            </div>

        </div>
    );
};