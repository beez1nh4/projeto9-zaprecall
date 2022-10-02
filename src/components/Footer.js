import React from 'react';
import styled from 'styled-components';
import Buttons from './Buttons';
import deckreact from './deck/deckreact';


export default function Footer(props) {
    const {deck, openAnswers, setOpenAnswers, alreadyAnswered, setAlreadyAnswered, remember, setRemember, almost, setAlmost, notRemember, setNotRemember} = props
    return(
        <>
            <FooterConcluidos>
                <Buttons deck={deckreact} openAnswers={openAnswers} setOpenAnswers={setOpenAnswers} alreadyAnswered={alreadyAnswered} setAlreadyAnswered={setAlreadyAnswered} remember={remember} setRemember={setRemember} almost={almost} setAlmost={setAlmost} notRemember={notRemember} setNotRemember={setNotRemember}></Buttons>
                <p>{alreadyAnswered.length}/{deck.length} CONCLUÍDOS</p>
            </FooterConcluidos>
        </>
    )
}
const FooterConcluidos = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900;1000&family=Righteous&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
  `
  
