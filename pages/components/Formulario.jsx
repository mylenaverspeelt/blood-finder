import React from "react";

function Formulario() {
    return (
        <>
 <p><b>Entre na lista de doadores</b></p>
            <form>
                <input type="text" placeholder="Nome" id="inputnome"/><br/>
                    <input type="email" placeholder="Email" id="inputemail"/><br/>
                        <input type="tipo" placeholder="Tipo" id="inputtipo"/><br/>
                            <button type="button" id="botao">Quero ajudar</button>
                        </form>
        </>
    )
}

export default Formulario