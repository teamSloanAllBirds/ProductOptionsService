import React from 'react';

class StatefulButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: this.props.style,
      selectedDescription: this.props.selected_description,
    }
  }
  onClick() {

  }
  render() {
    var isSelected = false;
    if (this.props.selected_description === this.props.description_name) {
      isSelected = true;
    }
    return (
      <div
      name={this.props.description_name}
      className="stateful_button"
      style={this.state.style} onClick={this.props.onClick}>
        {this.props.description_name}
        <div style={isSelected ? {display: "inline-block", marginLeft: "4px", marginTop: "2px", marginBottom: "2px"} : {padding: "17px 0", display: "none"}}>
          {this.props.text}
        </div>
      </div>
    )
  }
}

export default StatefulButton;