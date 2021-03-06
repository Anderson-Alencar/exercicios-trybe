import React from "react";

class Content extends React.Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];

    return (
      conteudos.map((cont) => {
        return (
          <div>
            <p>O conteúdo é: {cont.conteudo}</p>
            <p>Status: {cont.status}</p>
            <p>Bloco do conteúdo: {cont.bloco}</p>
            <hr />
          </div>
        );
      })
    );
  }
}

export default Content;