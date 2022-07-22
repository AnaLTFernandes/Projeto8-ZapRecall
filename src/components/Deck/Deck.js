import Flashcard from '../Flashcard/Flashcard';

import './Deck.css';

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