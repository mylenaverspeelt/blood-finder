import React from "react";
import styled from "styled-components";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Formulario() {


            



    return (
        <>
            <HR />
            <Paragrafo><AddCircleIcon /><b>Entre na lista de doadores</b></Paragrafo>
            <form>
                <Inputs type="text" placeholder="Nome" id="inputnome" /><br />
                <Inputs type="email" placeholder="Email" id="inputemail" /><br />
                <Inputs type="tipo" placeholder="Tipo" id="inputtipo" /><br />
                <Botao type="button" id="botao">Quero ajudar</Botao>
            </form>
        </>
    )
}

const HR = styled.hr`
margin: 30px 0;
`

const Paragrafo = styled.p`
padding: 15px 0;
`


const Inputs = styled.input`
    font-size: 15px;
    border-radius: 8px;
    box-shadow: none;
    margin: 5px;
    border: 1px solid var(--cinza);
    padding: 10px;
    width: 70%;
    border: 1px darkgrey solid;
`

const Botao = styled.button`
    width: 72%;
    height: 40px;
    margin: 18px auto 0;
    border: 0px;
    border-radius: 2rem;
    color: white;
    background-color:  #e23030;
`


export default Formulario