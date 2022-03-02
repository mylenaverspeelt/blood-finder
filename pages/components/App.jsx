import React from "react";
import Capa from "./Capa";
import styled from "styled-components";
import Home from "./Home";

export default function App() {
    return (
        <>
        <Container>
        <Capa />
        <Home />
        </Container>
        </>
    )

}

const Container = styled.div`
height: 100%;
display: flex;
font-family: sans-serif;
`