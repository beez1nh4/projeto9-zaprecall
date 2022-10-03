import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import seta_play from '../assets/img/seta_play.png'
import icone_certo from '../assets/img/icone_certo.png'
import icone_erro from '../assets/img/icone_erro.png'
import icone_quase from '../assets/img/icone_quase.png'

export default function Buttons(props) {
    const {deck,  icons, setIcons, newIcons, openCards, setOpenCards, openAnswers, setOpenAnswers, alreadyAnswered, setAlreadyAnswered, remember, setRemember, almost, setAlmost, notRemember, setNotRemember} = props
    const colors = ["#FF3030", "#FF922E", "#2FBE34"]
    function deleteItem(id){
        const newOpen = openCards.filter((idInArray) => idInArray !== id)
        setOpenCards(newOpen)
    }
    
    function increaseNot(){
        
        if (openAnswers.length !== alreadyAnswered.length){
            console.log('already', alreadyAnswered)
        console.log('openanswers',openAnswers)
        console.log('opencards',openCards)
        let newNotRemember = [...notRemember, openCards[openCards.length-1]]
        setNotRemember(newNotRemember)
        let newOne = [...icons]
        newOne[openCards[openCards.length-1]] = icone_erro
        setIcons(newOne)
        if (alreadyAnswered.length !== openAnswers.length){
            setAlreadyAnswered([...alreadyAnswered, openAnswers[openAnswers.length-1]])
            deleteItem(openCards[openCards.length-1])
        }
    }}
    function increaseAlmost(){
        if (openAnswers.length !== alreadyAnswered.length){
        let newAlmost = [...almost, openCards[openCards.length-1]]
        setAlmost(newAlmost)
        let newOne = [...icons]
        newOne[openCards[openCards.length-1]] = icone_quase
        setIcons(newOne)
        if (alreadyAnswered.length !== openAnswers.length){
            setAlreadyAnswered([...alreadyAnswered, openAnswers[openAnswers.length-1]])
            deleteItem(openCards[openCards.length-1])
        }
    }}
    function increaseRemember(){
        if (openAnswers.length !== alreadyAnswered.length){
        let newRemember = [...remember, openCards[openCards.length-1]]
        setRemember(newRemember)
        let newOne = [...icons]
        newOne[openCards[openCards.length-1]] = icone_certo
        setIcons(newOne)

        if (alreadyAnswered.length !== openAnswers.length){
            setAlreadyAnswered([...alreadyAnswered, openAnswers[openAnswers.length-1]])
            deleteItem(openCards[openCards.length-1])
        }
    }}
    return (
        <>
            <ContainerBotoes>
                <Button data-identifier="forgot-btn" color={colors[0]} onClick={increaseNot}>Não lembrei</Button>
                <Button data-identifier="almost-forgot-btn" color={colors[1]} onClick={increaseAlmost}>Quase não lembrei</Button>
                <Button data-identifier="zap-btn" color={colors[2]} onClick={increaseRemember}>Zap!</Button>
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

