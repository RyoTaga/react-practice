import React from 'react';

class App extends React.Component {
  render() {
    let txt = this.props.txt
    return <h1>{txt}</h1>
  }
}

App.defaultProps = {
  txt: 'this is the default text'
}

export default App