import React from 'react';
import styled from 'styled-components';

export default function Buttons() {
    return (
        <>
            <ContainerBotoes>
                <button>Não lembrei</button>
                <button>Quase não lembrei</button>
                <button>Zap!</button>
            </ContainerBotoes>
        </>
    )
}

const ContainerBotoes = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900;1000&family=Righteous&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
    
    & button{
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
    background: blue;
    border-radius: 5px;
    border: 1px solid blue;
    padding:5px;
    }`

/* Você vai precisar trocar a cor dos botões e alguns textos!
  VERDE = "#2FBE34"
  AMARELO = "#FF922E"
  VERMELHO = "#FF3030"
  CINZA = "#333333" 
 */

