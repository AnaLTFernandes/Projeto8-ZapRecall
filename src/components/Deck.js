import { useState } from "react";

const deck = [
    {
        question:'O que é JSX?',
        answer:'Uma extensão de linguagem do JavaScript',
        status: '',
        result: ''
    },
    {
        question:'O React é __ ',
        answer:'uma biblioteca JavaScript para construção de interfaces',
        status: '',
        result: ''
    },
    {
        question:'Componentes devem iniciar com __',
        answer:'letra maiúscula',
        status: '',
        result: ''
    },
    {
        question:'Podemos colocar __ dentro do JSX ',
        answer:'expressões',
        status: '',
        result: ''
    },
    {
        question:'O ReactDOM nos ajuda __ ',
        answer:' interagindo com a DOM para colocar componentes React na mesma',
        status: '',
        result: ''
    },
    {
        question:'Usamos o npm para __ ',
        answer:'gerenciar os pacotes necessários e suas dependências',
        status: '',
        result: ''
    },
    {
        question:'Usamos props para __ ',
        answer:'passar diferentes informações para componentes',
        status: '',
        result: ''
    },
    {
        question:'Usamos estado (state) para __ ',
        answer:'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
        status: '',
        result: ''
    },
]

function sort() {
    deck.sort(() => Math.random() -0.5);
}

sort();

function Flashcard ({flashcard, index, setProgress, progress, iconsResult, setIconsResult}) {
    const {question, answer, status, result} = flashcard;

    const [cardStatus, setCardStatus] = useState(status);
    const [cardResult, setCardResult] = useState(result);

    const className = (`flashcard ${cardStatus} ${cardResult}`).trim();

    let template;

    function setStates (classResult, iconName) {
        setCardStatus('concluded'); 
        setCardResult(classResult);
        setIconsResult([...iconsResult, {iconName:iconName, iconClass:classResult}]);
        setProgress(progress+1);
    }

    if(cardStatus === '') {
        template = (
            <div key={index} className={className}>
                <span>Pergunta {index+1}</span>
                <ion-icon name="play-outline" onClick={() => setCardStatus('progress-ask')}></ion-icon>
            </div>
        )
    }

    else if (cardStatus === 'progress-ask') {
        template = (
            <div key={index} className={className}>
                <span>{question}</span>
                <img alt='turn' src="./images/setinha.png" onClick={() => setCardStatus('progress-answer')} />
            </div>
        )
    }
    
    else if (cardStatus === 'progress-answer') {
        template = (
            <div key={index} className={className}>
                <span>{answer}</span>
                <div className="options">
                    <div className="option-1"
                        onClick={() => {
                            setStates('incorrect', 'close')}}>
                            Não lembrei
                    </div>
                    <div className="option-2" 
                        onClick={() => {
                            setStates('correct', 'help')}}>
                            Quase não lembrei
                    </div>
                    <div className="option-3" 
                        onClick={() => {
                            setStates('correct-good', 'checkmark')}}>
                            Zap!
                    </div>
                </div>
            </div>
        )
    }
    else {
        template = (
            <div key={index} className={className}>
                <s><span>Pergunta {index+1}</span></s>
                <ion-icon name={`${iconsResult.at(-1).iconName}-circle`}></ion-icon>
            </div>
        )
    }
    
    return (template);
}

export default function Deck({setTotal, progress, setProgress, setIconsResult, iconsResult}) {

    setTotal(deck.length);
    
    return (
        <main className="deck">

            {deck.map((flashcard, index) => (
                <Flashcard flashcard={flashcard} index={index} progress={progress} setProgress={setProgress} iconsResult={iconsResult} setIconsResult={setIconsResult}/>
            ))}
        </main>
    );
}