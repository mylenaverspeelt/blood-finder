import React, { useState } from "react";
import styled from "styled-components";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "./Button";

function Formulario() {
  const [inputNome, setInputNome] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputTipo, setInputTipo] = useState("");

  const [lista, setLista] = useState({
    nome:  '',
    email: '',
    tipoSanguineo: '',
  });


  function adicionarItemLista() {
    // setLista({
    //     nome: inputNome,
    //     email: inputEmail,
    //     tipoSanguineo: inputTipo
    // }) 
  }



  return (
    <>
      <HR />
      <AddCircleIcon />
      <Paragrafo>
        <b>Entre na lista de doadores</b>
      </Paragrafo>
      <form>
        <Inputs
          type="text"
          placeholder="Nome"
          id="inputnome"
          onChange={(event) => {
            setInputNome(event.target.value);
          }}
          value={inputNome}
        />
        <br />
        <Inputs
          type="email"
          placeholder="Email"
          id="inputemail"
          onChange={(event) => {
            setInputEmail(event.target.value);
          }}
          value={inputEmail}
        />
        <br />
        <Inputs
          type="tipo"
          placeholder="Tipo"
          id="inputtipo"
          onChange={(event) => {
            setInputTipo(event.target.value);
          }}
          value={inputTipo}
        />
        <br />
      </form>
      <Button onClick={adicionarItemLista()} />
    </>
  );
}

const HR = styled.hr`
  border-top: 1px solid grey;
  margin: 30px 0;
  border-left: none;
  border-bottom: none;
  border-right: none;
`;

const Paragrafo = styled.p`
  padding: 15px 0;
`;

const Inputs = styled.input`
  font-size: 15px;
  border-radius: 8px;
  box-shadow: none;
  margin: 5px 0;
  border: 1px solid var(--cinza);
  padding: 10px;
  width: 70%;
  border: 1px darkgrey solid;
`;

const Botao = styled.button`
  width: 72%;
  height: 40px;
  margin: 18px auto 0;
  border: 0px;
  border-radius: 2rem;
  color: white;
  background-color: #e23030;
`;

export default Formulario;
