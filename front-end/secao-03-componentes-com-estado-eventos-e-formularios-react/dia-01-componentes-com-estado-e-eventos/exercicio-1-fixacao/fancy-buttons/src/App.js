import React from 'react';

class App extends React.Component {
  handleButtonOne = () => {
    console.log('Clicou no botão 1', this)
  }
  handleButtonTwo = () => {
    console.log('Clicou no botão 2', this)
  }
  handleButtonThree = () => {
    console.log('Clicou no botão 3', this)
  }

  render() {
    return (
    <div>
      <button onClick={this.handleButtonOne}>Botão 1</button>
      <button onClick={this.handleButtonTwo}>Botão 2</button>
      <button onClick={this.handleButtonThree}>Botão 3</button>
    </div>
    );
  }
}

export default App;