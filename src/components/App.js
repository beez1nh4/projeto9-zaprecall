import React from 'react';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import Title from './Title';
import Footer from './Footer';
import Cards from './Cards';
import deckreact from './deck/deckreact';
import { useState } from "react"

export default function App() {
    const [alreadyAnswered, setAlreadyAnswered] = useState([])
    const [openAnswers, setOpenAnswers] = useState([])
    const [recall, setRecall] = useState([])
    
    return (
        <>
        <GlobalStyle/>
        <ScreenContainer>
            <Title></Title>
            <Cards deck={deckreact} openAnswers={openAnswers} setOpenAnswers={setOpenAnswers} alreadyAnswered={alreadyAnswered} setAlreadyAnswered={setAlreadyAnswered} recall={recall} setRecall={setRecall}></Cards>
            <Footer deck={deckreact} openAnswers={openAnswers} setOpenAnswers={setOpenAnswers} alreadyAnswered={alreadyAnswered} setAlreadyAnswered={setAlreadyAnswered} recall={recall} setRecall={setRecall}></Footer>
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