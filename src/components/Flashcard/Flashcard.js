import { useState } from "react";

import arrowIMG from '../assets/images/setinha.png';
import secretIMG from '../assets/images/secret.gif';

import './Flashcard.css';

export default function Flashcard ({
        index,
        answer,
        status,
        result,
        question,
        progress,
        iconsResult,
        setProgress,
        setIconsResult,
        ...other
    }) {

    const [cardStatus, setCardStatus] = useState(status);
    const [cardResult, setCardResult] = useState(result);

    const className = (`flashcard ${cardStatus} ${cardResult} ${other.secret ? 'secret' : ''}`).trim();

    let template;

    function setStates (classResult, iconName) {
        setCardStatus('concluded');
        setCardResult(classResult);
        setIconsResult([...iconsResult, {iconName:iconName, iconClass:classResult}]);
        setProgress(progress+1);
    }

    if (cardStatus === '') {
        template = (
            <div key={index} className={className}>

                <span>Pergunta {index+1}</span>

                <ion-icon name="play-outline" onClick={() => setCardStatus('progress-ask')}></ion-icon>
            </div>
        );
    }

    else if (cardStatus === 'progress-ask') {
        template = (
            <div key={index} className={className}>

                <span>{question}</span>

                <img alt='turn' src={arrowIMG} onClick={() => setCardStatus('progress-answer')} />
            </div>
        );
    }

    else if (cardStatus === 'progress-answer') {
        template = (
            <div key={index} className={className}>

                <span>{answer}</span>

                <div className="options">

                    <div className="option-1"
                        onClick={() => {setStates('incorrect', 'close')}}>
                            Não lembrei
                    </div>

                    <div className="option-2"
                        onClick={() => {setStates('correct', 'help')}}>
                            Quase não lembrei
                    </div>

                    <div className="option-3"
                        onClick={() => {setStates('correct-good', 'checkmark')}}>
                            Zap!
                    </div>
                </div>
            </div>
        );
    }

    else {
        let icon;

        if (cardResult === 'correct-good') {
            icon = 'checkmark';
        };
        if (cardResult === 'correct') {
            icon = 'help';
        };
        if (cardResult === 'incorrect') {
            icon = 'close';
        };

        template = (
            <div key={index} className={className}>

                <s><span>Pergunta {index+1}</span></s>

                {icon === 'checkmark' && other.secret ?
                    <img className='secretImage' alt='' src={secretIMG}></img>
                    : ''
                }

                <ion-icon name={`${icon}-circle`}></ion-icon>
            </div>
        );
    };

    return (template);
};