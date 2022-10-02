import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo.png'

export default function Title() {
    return (
        <>
            <LogoContainer>
                <img alt=""src={logo}/>
                <h1>ZapRecall</h1>
            </LogoContainer>
        </>

    )
}

const LogoContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900;1000&family=Righteous&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');    align-items: center;
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
   
   & img {
    width: 52px;
  } & h1 {
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
  }`