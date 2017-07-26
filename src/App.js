import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'This is the state text',
    }
  }
  updateText(event) {
    this.setState({
      txt: event.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <input type="text" onChange={this.updateText.bind(this)} />
      </div>
    )
  }
}

export default App