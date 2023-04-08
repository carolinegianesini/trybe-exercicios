import React from 'react';

class App extends React.Component {
  state = {
    clicksBtnOne: 0,
    clicksBtnTwo: 0,
    clicksBtnThree: 0,
  }

  handleButtonOne = () => {
    this.setState(({ clicksBtnOne }) => ({
      clicksBtnOne: clicksBtnOne + 1,
    }));
    console.log('Clicou no botão 1')
  }

  handleButtonTwo = () => {
    this.setState(({ clicksBtnTwo }) => ({
      clicksBtnTwo: clicksBtnTwo + 1,
    }));
    console.log('Clicou no botão 2')
  }

  handleButtonThree = () => {
    this.setState(({ clicksBtnThree }) => ({
      clicksBtnThree: clicksBtnThree + 1,
    }));
    console.log('Clicou no botão 3')
  }

  render() {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
    return (
    <div>
      <button onClick={this.handleButtonOne}>{clicksBtnOne}</button>
      <button onClick={this.handleButtonTwo}>{clicksBtnTwo}</button>
      <button onClick={this.handleButtonThree}>{clicksBtnThree}</button>
    </div>
    );
  }
}

export default App;