import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
      	Hi
      	{this.props.children}
      </div>
    );
  }
}

export default App;
