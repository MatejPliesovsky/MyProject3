import React from 'react';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <h1>Main Page</h1>
        <div>{this.props.children}</div>
      </div>
    )
  }
}
export default MainPage;
