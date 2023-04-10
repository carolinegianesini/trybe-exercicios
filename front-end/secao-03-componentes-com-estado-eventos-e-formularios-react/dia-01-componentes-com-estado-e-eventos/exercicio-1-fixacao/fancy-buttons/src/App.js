import React from 'react';

class App extends React.Component {
  getButtonColor = (num) => {
    return num % 2 === 0 ? 'green' : 'white';
  }

  state = {
    clicksBtnOne: 0,
    clicksBtnTwo: 0,
    clicksBtnThree: 0,
  }

  handleButtonOne = () => {
    const { clicksBtnOne } = this.state;
    this.setState(({ clicksBtnOne }) => ({
      clicksBtnOne: clicksBtnOne + 1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(clicksBtnOne)}`)
    });
  }

  handleButtonTwo = () => {
    const { clicksBtnTwo } = this.state;
    this.setState(({ clicksBtnTwo }) => ({
      clicksBtnTwo: clicksBtnTwo + 1,
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(clicksBtnTwo)}`)
    });
  }

  handleButtonThree = () => {
    const { clicksBtnThree } = this.state;
    this.setState(({ clicksBtnThree }) => ({
      clicksBtnThree: clicksBtnThree + 1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(clicksBtnThree)}`)
    });
  }

  render() {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
    return (
    <div>
      <button onClick={this.handleButtonOne} style={ { backgroundColor: this.getButtonColor(clicksBtnOne) } }>{clicksBtnOne}</button>
      <button onClick={this.handleButtonTwo} style={ { backgroundColor: this.getButtonColor(clicksBtnTwo) } }>{clicksBtnTwo}</button>
      <button onClick={this.handleButtonThree} style={ { backgroundColor: this.getButtonColor(clicksBtnThree) } }>{clicksBtnThree}</button>
    </div>
    );
  }
}

export default App;