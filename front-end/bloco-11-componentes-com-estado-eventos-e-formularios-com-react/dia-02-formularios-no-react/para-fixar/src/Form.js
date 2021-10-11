import React from "react";

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      warrior: '',
    }
  }

  handleOnChange = (event) => {
    this.setState({ warrior: event.target.value })
  }
  
  render() {
    return(
      <div>
        <h1>Meu Form</h1>
        <form className='form'>
          <select> 
            <option>Fogo</option>
            <option>Água</option>
            <option>Terra</option>
            <option>Ar</option>
          </select>
          <input type='text' placeholder='Nome' onChange={this.handleOnChange} value={this.state.warrior}></input>
          <input type='number' placeholder='Nível de graduação. Máx 5'></input>
          <textarea placeholder='Conte sua história'></textarea>
        </form>
      </div>
    );
  }

}

export default Form;