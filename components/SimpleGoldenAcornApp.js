import React from 'react';
import Button from './Button';
import Display from './Display';

class SimpleGoldenAcornApp extends React.Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.state = { number: 0 };
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
    const { number } = this.state;
    return () => {
      this.setState({
        number: number + 1,
      });
    };
  }

  eat () { //eslint-disable-line
    const { number } = this.state;
    return () => {
      if (number > 0) {
        this.setState({
          number: number - 1,
        });
      }
    };
  }

  render() {
    const { number } = this.state;
    return (
      <div>
        <Button name="Buy one" onClick={this.buy()} />
        <Display>{number}</Display>
        <Button name="Eat one" onClick={this.eat()} />
      </div>
    );
  }
}

export default SimpleGoldenAcornApp;
