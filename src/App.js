import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0
  };

  countUp = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="App">
        <div>{this.state.count}</div>
        <button onClick={this.countUp}>count up!</button>
      </div>
    );
  };
}


/*
class App extends Component {
  state = {
    hello: 'hello app js!'
  };

  handleChange = () => {
    this.setState({
      hello: 'bye app js!'
    });
  };

  render() {
    return (
      <div className="App">
        <div>{this.state.hello}</div>
        <button onClick={this.handleChange}>click Me!</button>
      </div>
    );
  }
}
*/

export default App;
