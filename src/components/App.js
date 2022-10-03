import React from 'react';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import Title from './Title';
import Footer from './Footer';
import Cards from './Cards';
import deckreact from './deck/deckreact';
import { useState } from "react"
import seta_play from '../assets/img/seta_play.png'


export default function App() {
    const [alreadyAnswered, setAlreadyAnswered] = useState([])
    const [openAnswers, setOpenAnswers] = useState([])
    const [remember, setRemember] = useState([])
    const [almost, setAlmost] = useState([])
    const [notRemember, setNotRemember] = useState([])
    const [openCards, setOpenCards] = useState([])  
    let newIcons = []

    for (let i = 0; i < deckreact.length; i++) {
        newIcons.push(seta_play)
    }
    const [icons, setIcons] = useState(newIcons)

    return (
        <>
        <GlobalStyle/>
        <ScreenContainer>
            <Title></Title>
            <Cards deck={deckreact} icons={icons} newIcons={newIcons} setIcons={setIcons} openCards={openCards} setOpenCards={setOpenCards} openAnswers={openAnswers} setOpenAnswers={setOpenAnswers} alreadyAnswered={alreadyAnswered} setAlreadyAnswered={setAlreadyAnswered} remember={remember} setRemember={setRemember} almost={almost} setAlmost={setAlmost} notRemember={notRemember} setNotRemember={setNotRemember}></Cards>
            <Footer deck={deckreact} icons={icons} newIcons={newIcons} setIcons={setIcons} openCards={openCards} setOpenCards={setOpenCards} openAnswers={openAnswers} setOpenAnswers={setOpenAnswers} alreadyAnswered={alreadyAnswered} setAlreadyAnswered={setAlreadyAnswered} remember={remember} setRemember={setRemember} almost={almost} setAlmost={setAlmost} notRemember={notRemember} setNotRemember={setNotRemember}></Footer>
        </ScreenContainer>
        </>
    )
}
const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
  `;