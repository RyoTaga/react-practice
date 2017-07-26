import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'This is the state text',
    }
  }
  render() {
    return <h1>{this.state.txt}</h1>
  }
}

export default App