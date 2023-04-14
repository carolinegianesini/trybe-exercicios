import React, { Component } from 'react';
import SelectInput from './SelectInput';
import EmailInput from './EmailInput';
import AgeInput from './AgeInput';
import DescriptionInput from './DescriptionInput';

class Form extends Component {
  state = {
    children: '',
    email: '',
    age: '',
    description: '',
    terms: false,
    formularioComErros: true,
  }

  handleError = () => {
    const { children, email, age, description, terms } = this.state;
    
    const errorCases = [
      !children.length,
      !email.match(/^\S+@\S+$/i),
      !age.length,
      !description.length,
      !terms,
    ];

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    });
  };

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = (type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.handleError);
  };
  
  render() {
    const { children, email, age, description, terms, formularioComErros } = this.state;
    return (
      <div>
        <h1>Meu Formulario - dados pessoais</h1>
        <form>
        <fieldset>
            <SelectInput children={children} handleChange={this.handleChange} />
            <EmailInput email={email} handleChange={this.handleChange} />
            <AgeInput age={age} handleChange={this.handleChange} />
            <DescriptionInput description={description} handleChange={this.handleChange} />
        </fieldset>

          <div>
            <input type="file" name="file" id="file" />
          </div>

          <label htmlFor="terms">
            <input
              id="terms"
              type="checkbox"
              name="terms"
              onChange={ this.handleChange }
              value={ terms }
            />
            Concordo com termos e acordos
          </label>
          </form>
          { formularioComErros
          ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
          : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
      </div>
    )
  }
}

export default Form;