import React from 'react';
import styled from 'styled-components';

export default function Buttons(props) {
    const {deck,  openAnswers, setOpenAnswers, alreadyAnswered, setAlreadyAnswered, recall, setRecall} = props
    const colors = ["#FF3030", "#FF922E", "#2FBE34"]
    function increaseNot(){
        let newRecall = [...recall, "notRemembered"]
        setRecall(newRecall)
        if (alreadyAnswered.length !== openAnswers.length)
        {setAlreadyAnswered([...alreadyAnswered, 1])}
    }
    function increaseAlmost(){
        let newRecall = [...recall, "almost"]
        setRecall(newRecall)
        if (alreadyAnswered.length !== openAnswers.length)
        {setAlreadyAnswered([...alreadyAnswered, 1])}
    }
    function increaseRemember(){
        let newRecall = [...recall, "remember"]
        setRecall(newRecall)
        if (alreadyAnswered.length !== openAnswers.length)
        {setAlreadyAnswered([...alreadyAnswered, 1])}
    }
    return (
        <>
            <ContainerBotoes>
                <Button color={colors[0]} onClick={increaseNot}>Não lembrei</Button>
                <Button color={colors[1]} onClick={increaseAlmost}>Quase não lembrei</Button>
                <Button color={colors[2]} onClick={increaseRemember}>Zap!</Button>
            </ContainerBotoes>
        </>
    )
}

const ContainerBotoes = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900;1000&family=Righteous&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    display: flex;
    width: 300px;
    justify-content: space-between;
    margin: 20px;`

const Button = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${(props) => props.color};
    border-radius: 5px;
    border: 1px solid ${(props) => props.color};
    padding:5px;
    `

/* Você vai precisar trocar a cor dos botões e alguns textos!
  VERDE = "#2FBE34"
  AMARELO = "#FF922E"
  VERMELHO = "#FF3030"
  CINZA = "#333333" 
 */

