export default function DeckProgress ({progress, total, iconsResult}) {
    let allRigth = true;
    let template;

    iconsResult.forEach(({ iconClass }) => {
        if (iconClass === 'incorrect') {
            allRigth = false;
        }
    })
    

    if (progress === total) {

        let { img, title, text } = (allRigth
            ? {
                img:'./images/party.png', 
                title:'Parabéns!', 
                text:'Você não esqueceu de nenhum flashcard!'}
            : {
                img:'./images/sad.png', 
                title:'Putz...', 
                text:'Ainda faltam alguns... Mas não desanime!'}
        );

        template = (
            <div className='deck-progress end-game'>
                <div className="result">
                    <span>
                        <img src={img} alt={title} />
                        {title}
                    </span>
                    <div>{text}</div>
                </div>

                <div className="status-progress">{progress}/{total} CONCLUÍDOS</div>

                <div className='icons-progress'>
                    {iconsResult.map(({iconName, iconClass}) =>
                        <ion-icon class={iconClass} name={`${iconName}-circle`}></ion-icon>
                    )}
                </div>
            </div>
        );
    } else {
        template = (
            <div className='deck-progress'>
                <div className="status-progress">{progress}/{total} CONCLUÍDOS</div>

                <div className='icons-progress'>
                    {iconsResult.map(({iconName, iconClass}) =>
                        <ion-icon class={iconClass} name={`${iconName}-circle`}></ion-icon>
                    )}
                </div>
            </div>
        );
    }

    return (template);
}