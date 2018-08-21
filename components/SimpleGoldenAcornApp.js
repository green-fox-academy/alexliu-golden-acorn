import React from 'react';
import Button from './Button';
import Display from './Display';

class SimpleGoldenAcornApp extends React.Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  buy () { //eslint-disable-line
    this.setState({ number: this.state.number + 1 });
  }
  
  eat () { //eslint-disable-line
    if (this.state.number > 0) {
      this.setState({ number: this.state.number - 1 });
    }
  }

  render() {
    return (
      <div>
        <Button text="Buy one" onclick={this.buy.bind(this)} />
        <Display number={this.state.number} />
        <Button text="Eat one" onclick={this.eat.bind(this)} />
      </div>
    );
  }
}

export default SimpleGoldenAcornApp;
