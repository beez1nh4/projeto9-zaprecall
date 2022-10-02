import React from 'react';
import styled from 'styled-components';
import seta_play from '../assets/img/seta_play.png'
import seta_virar from '../assets/img/seta_virar.png'
import { useState } from "react"

export default function Cards(props) {
    const {deck, openAnswers, setOpenAnswers, alreadyAnswered, recall, setRecall} = props
    console.log(deck)
    
    const [openCards, setOpenCards] = useState([])
    function openCard(i){
        if (alreadyAnswered.length === openCards.length)
        {setOpenCards([...openCards, i])
        console.log([...openCards, i])
    }
    }
   
    function showAnswer(i){
        setOpenAnswers([...openAnswers,i])
    }
    return(
        <>
            {deck.map((deck,i) => (!openCards.includes(deck.id-1)) ? <PerguntaFechada key={deck.id} onClick={()=>openCard(i)}>
                <p>Pergunta {deck.id}</p>
                <img alt="" src={seta_play}/>
            </PerguntaFechada>
            :
            (!openAnswers.includes(deck.id-1) ? <PerguntaAberta key={deck.id} >
                <p>{deck.question}</p>
                <img alt="" src={seta_virar} onClick={()=>showAnswer(i)}/>
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
  
  & p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }` 
const PerguntaAberta = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900;1000&family=Righteous&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
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