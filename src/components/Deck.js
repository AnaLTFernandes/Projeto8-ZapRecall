import React from "react";

const deck = [
    {
        question:'O que é JSX?',
        answer:'Uma extensão de linguagem do JavaScript',
        status: '', // progress-ask/progress-answer/concluded
        result: '' // correct-good/correct/incorrect
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

function Flashcard ({flashcard, index}) {
    const {question, answer, status, result} = flashcard;

    const [cardStatus, setCardStatus] = React.useState(status);
    const [cardResult, setCardResult] = React.useState(result);
    const [iconResult, setIconResult] = React.useState('');

    const className = (`flashcard ${cardStatus} ${cardResult}`).trim();

    let template;

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
                            setCardStatus('concluded'); 
                            setCardResult('incorrect');
                            setIconResult("close")}}>
                            Não lembrei
                    </div>
                    <div className="option-2" 
                        onClick={() => {
                            setCardStatus('concluded'); 
                            setCardResult('correct');
                            setIconResult("help")}}>
                            Quase não lembrei
                    </div>
                    <div className="option-3" 
                        onClick={() => {
                            setCardStatus('concluded'); 
                            setCardResult('correct-good');
                            setIconResult("checkmark");
                            console.log(setIconResult)}}>
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
                <ion-icon name={`${iconResult}-circle`}></ion-icon>
                
            </div>
        )
    }
    
    return (template);
}

export default function Deck({setTotal, progress, setProgress}) {

    setTotal(deck.length);
    
    return (
        <div className="deck">

            {deck.map((flashcard, index) => (
                <Flashcard flashcard={flashcard} index={index}/>
            ))}
        </div>
    );
}