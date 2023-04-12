import React, { Component } from 'react';

class Form extends Component {
  state = {
    children: 0,
    email: '',
    age: 0,
    description: '',
  }

  emailChange = (event) => {
    this.setState({
      email: event.target.value,
    })
  };

  render() {
    const { email } = this.state;
    return (
      <div>
        <h1>Meu Formulario - dados pessoais</h1>
        <form>

          <div>
            <label htmlFor="children">Filhos:
              <select name="campoSelect" id="children">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
          </div>

          <div>
            <label htmlFor="email">E-mail:
              <input type="email" id="email" onChange={ this.emailChange } value={ email } />
            </label>
          </div>

          <div>
            <label htmlFor="age">Idade:
              <input type="number" name="idade" id="age" />
            </label>
          </div>

          <div>
            <label htmlFor="profile">
              <textarea name="description" id="profile" cols="30" rows="5">Descreva-se em poucas palavras</textarea>
            </label>
          </div>

        </form>
      </div>
    )
  }
}

export default Form;