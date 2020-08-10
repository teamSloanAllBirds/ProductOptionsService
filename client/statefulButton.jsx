import React from 'react';

class StatefulButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      style: this.props.style,
      colorway_name: this.props.colorway_name,
      selected: false
    }
    this.toggleHover = this.toggleHover.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }
  toggleHover() {
    if (!this.state.hover) {
      this.setState({
        hover: !this.state.hover,
        style: {
          display: this.state.style.display,
          margin: this.state.style.margin,
          width: this.state.style.width,
          height: this.state.style.height,
          backgroundColor: this.state.style.backgroundColor,
          borderRadius: this.state.style.borderRadius,
          border: "1px solid #dedede",
          padding: "2px",
        },
        colorway_name: this.state.colorway_name
      });
    } else {
      this.setState({
        hover: !this.state.hover,
        style: {
          display: this.state.style.display,
          margin: this.state.style.margin,
          width: this.state.style.width,
          height: this.state.style.height,
          backgroundColor: this.state.style.backgroundColor,
          borderRadius: this.state.style.borderRadius,
          border: "1px solid white ",
          padding: "2px"
        },
        colorway_name: this.state.colorway_name
      });
    }
  }
  toggleClick(e) {
    e.preventDefault();
    this.props.onClick(e);
  }
  render() {
    return (
      <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={this.state.style} onClick={this.toggleClick} colorway_name={this.props.colorway_name}>
        <div style={this.props.background}/>
        {this.props.image}
        {this.props.text}
      </div>
    )
  }
}

export default StatefulButton;