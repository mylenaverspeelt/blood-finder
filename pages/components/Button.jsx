import styled from "styled-components";

function Button(props){
return(<Botao onClick={props.onClick}>Add</Botao>)
}

export default Button

const Botao = styled.button`
  width: 72%;
  height: 40px;
  margin: 18px auto 0;
  border: 0px;
  border-radius: 2rem;
  color: white;
  background-color: #e23030;
`;