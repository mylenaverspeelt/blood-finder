import React from "react";
import styled from "styled-components";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

function Titulo(){
    return (
        <>
        <Subtitulos>
       <DoubleArrowIcon /> <h3>A sua doação importa!</h3>
        <p>Mais de 38.000 doações são necessárias todos os dias. Apenas 1,9% da população brasileira doa sangue.</p>
        </Subtitulos>
        </>
        )
}


const Subtitulos = styled.div`
padding-top: 50px;
line-height: 35px;
`

export default Titulo