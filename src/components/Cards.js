import styled from 'styled-components';
import seta_virar from '../assets/img/seta_virar.png'


export default function Cards(props) {
    const { deck, icons, newIcons, setIcons, openCards, setOpenCards, openAnswers, setOpenAnswers, alreadyAnswered, remember, setRemember, almost, setAlmost, notRemember, setNotRemember } = props


    function openCard(i) {
        if (alreadyAnswered.length === (remember.length + almost.length + notRemember.length) && openCards.length ===0)  {
            setOpenCards([...openCards, i])
        }
    }

    function showAnswer(i) {
        setOpenAnswers([...openAnswers, i])
    }

    
    function defineColor(id) {
        if (remember.includes(id)) {
            return "#2FBE34"
        } if (notRemember.includes(id)) {
            return "#FF3030"
        } if (almost.includes(id)) {
            return "#FF922E"
        } else {
            return "#333333"
        }
    }
    return (
        <>
            {deck.map((deck, i) => (!openCards.includes(deck.id - 1)) ? <PerguntaFechada key={deck.id} onClick={() => openCard(i)}  line={alreadyAnswered.includes(deck.id - 1) && "line-through"} color={() => defineColor(deck.id - 1)}>
                <p>Pergunta {deck.id}</p>
                <img alt=""  src={icons[i]} />
            </PerguntaFechada>
                :
                (!openAnswers.includes(deck.id - 1) ? <PerguntaAberta key={deck.id} >
                    <p>{deck.question}</p>
                    <img alt="" src={seta_virar} onClick={() => showAnswer(i)} />
                </PerguntaAberta> : <PerguntaAberta key={deck.id}>
                    <p>{deck.answer}</p>
                </PerguntaAberta>))}

        </>
    )
}

const PerguntaFechada = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900;1000&family=Righteous&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.color};
    text-decoration-line: ${(props) => props.line};}
    `

const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  
  & img{
    position: absolute;
    bottom: 10px;
    right: 10px;
  }`

/* Você vai precisar trocar a cor dos botões e alguns textos!
VERDE = "#2FBE34"
AMARELO = "#FF922E"
VERMELHO = "#FF3030"
CINZA = "#333333" 
*/
