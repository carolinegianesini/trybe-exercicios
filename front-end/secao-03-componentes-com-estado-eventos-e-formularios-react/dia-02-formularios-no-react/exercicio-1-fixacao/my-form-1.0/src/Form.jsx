import React, { Component } from 'react';
import SelectInput from './SelectInput';

class Form extends Component {
  state = {
    children: '',
    email: '',
    age: '',
    description: '',
    terms: false,
  }

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = (type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  };

  
  render() {
    const { children, email, age, description, terms } = this.state;
    return (
      <div>
        <h1>Meu Formulario - dados pessoais</h1>
        <form>
        <fieldset>
          <div>
            <SelectInput children={children} handleChange={this.handleChange} />
          </div>
        </fieldset>

          <div>
            <label htmlFor="email">E-mail:
              <input name="email" type="email" id="email" onChange={ this.handleChange } value={ email } />
            </label>
          </div>

          <div>
            <label htmlFor="age">Idade:
              <input type="number" name="age" id="age" onChange={ this.handleChange } value={ age }/>
            </label>
          </div>

          <div>
            <label htmlFor="profile">
              <textarea name="description" id="description" onChange={ this.handleChange } value={ description }>
                Descreva-se em poucas palavras</textarea>
            </label>
          </div>

          <div>
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
          </div>

          <div>
            <input type="file" name="file" id="file" />
          </div>

        </form>
      </div>
    )
  }
}

export default Form;