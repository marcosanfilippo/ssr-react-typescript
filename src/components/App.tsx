import * as React from 'react';

class App extends React.Component<Title> {
  static defaultProps: any;

  render() {
    return (
      <div>
        <h1>Welcome to SSR for React with Typescript!</h1>
        <p>This is: {this.props.title}</p>
      </div>
    );
  }
}

export default App;
