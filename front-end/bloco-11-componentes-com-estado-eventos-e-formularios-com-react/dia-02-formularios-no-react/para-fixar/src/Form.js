import React from "react";

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      house: '',
      warrior: '',
      nivel: '',
      description: '',
      check: '',
      addFile: ''
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    
    this.setState({ 
      [name]: value 
    })
  }
  
  render() {
    const { warrior, nivel, description } = this.state;

    return(
      <div>
        <h1>Meu Form</h1>
        <form className='form'>
          <select name='house' onChange={this.handleChange}> 
            <option value='fire'>Fogo</option>
            <option value='water'>Água</option>
            <option value='earth'>Terra</option>
            <option value='air'>Ar</option>
          </select>
          <input name='warrior' type='text' placeholder='Nome' onChange={this.handleChange} value={warrior} />
          <input name='nivel' type='number' placeholder='Nível de graduação. Máx 5' onChange={this.handleChange} value={nivel} />
          <textarea name='description' placeholder='Conte sua história' onChange={this.handleChange} value={description} />
          <fieldset>
            <input name='check' type='checkbox' onChange={this.handleChange} />
            <input name='addFile' type='file' onChange={this.handleChange} />
          </fieldset>
          
        </form>
      </div>
    );
  }

}

export default Form;