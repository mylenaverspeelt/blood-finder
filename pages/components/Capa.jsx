import React from "react";
import styled from "styled-components";

function Capa() {
    return (
        <>
            <Subtitulos>
                <img src="https://media0.giphy.com/media/Y1Dbuq0nOB2vbekWOV/giphy.gif?cid=ecf05e47hrrx4nfr6s68y9wzjncol10xg1eh7425kyzm027h&rid=giphy.gif&ct=s" />
                <h3>Doe sangue, salve vidas!</h3>
                <p>Campanha de doação de sangue - 2021</p>
            </Subtitulos>
        </>
    )
}

const Subtitulos = styled.div`
background-color: #871212;
color: white;
text-align: center;

`


export default Capa


