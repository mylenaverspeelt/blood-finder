import React from "react";
import Capa from "./Capa";
import styled from "styled-components";
import Home from "./Home";
import { createGlobalStyle } from 'styled-components'


export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container >
        <Capa />
        <Home />
      </Container>
    </>
  )

}

const Container = styled.div`
display: flex;
`

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
      font-family:  sans-serif;
      display: flex;
  }
`