import React from "react";
import Formulario from "./Formulario";
import Lista from "./Lista";
import Titulo from "./Titulo";
import styled from "styled-components";

function Home() {
    return (
        <>
            <Container>
                <Titulo />
                <Formulario />
                <Lista />
            </Container>
        </>
    )
}

const Container = styled.div`
padding: 0 50px;
`




export default Home