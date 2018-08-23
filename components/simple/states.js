import React from 'react';
import Navlink from '../Navlink';
import Button from '../Button';
import Display from '../Display';

class SimpleGoldenAcornApp extends React.Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.state = { amount: 0 };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleEnterKey());
  }

  handleEnterKey() {
    return (e) => {
      if (e.keyCode === 38) {
        this.buy()();
      } else if (e.keyCode === 40) {
        this.eat()();
      }
    };
  }

  buy() { // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    const { amount } = this.state;
    return () => {
      this.setState({
        amount: amount + 1,
      });
    };
  }

  eat () { //eslint-disable-line
    const { amount } = this.state;
    return () => {
      if (amount > 0) {
        this.setState({
          amount: amount - 1,
        });
      }
    };
  }

  render() {
    const { amount } = this.state;
    return (
      <div>
        <Navlink />
        <h1>Golden Acorn Application with states</h1>
        <Button name="Buy one" onClick={this.buy()} />
        <Display amount={amount} />
        <Button name="Eat one" onClick={this.eat()} />
      </div>
    );
  }
}

export default SimpleGoldenAcornApp;
