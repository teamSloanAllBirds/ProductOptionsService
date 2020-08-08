import React from 'react';

class StatefulButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div style={this.props.style}>
        {this.props.text}
      </div>
    )
  }
}

export default StatefulButton;