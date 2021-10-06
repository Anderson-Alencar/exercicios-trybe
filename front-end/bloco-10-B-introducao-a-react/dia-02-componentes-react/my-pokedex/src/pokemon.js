import React from "react";
import './pokemon.css'

class Card extends React.Component{
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <div className='card'>
        <div>
          <p>{this.props.nome}</p>
          <p>{this.props.tipo}</p>
          <p>Average weight {this.props.peso} {this.props.unidade}</p>
        </div>
        <div>
          <img src={this.props.imagem} />
        </div>
      </div>
    );
  }
}

export default Card;