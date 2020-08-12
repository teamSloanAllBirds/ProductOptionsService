import React from 'react';

class StatefulButtonColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      style: this.props.style,
      colorway_name: this.props.colorway_name,
      selectedStyle: {
        display: this.props.style.display,
        margin: this.props.style.margin,
        width: this.props.style.width,
        height: this.props.style.height,
        backgroundColor: this.props.style.backgroundColor,
        borderRadius: this.props.style.borderRadius,
        border: "2px solid #cfcfcf",
        padding: "1px",
      }
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
        colorway_name: this.state.colorway_name,
        selectedStyle: this.state.selectedStyle
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
          border: "1px solid white",
          padding: "2px"
        },
        colorway_name: this.state.colorway_name,
        selectedStyle: this.state.selectedStyle
      });
    }
  }
  toggleClick(e) {
    e.preventDefault();
    this.setState({
      hover: false,
      style: {
        display: this.state.style.display,
        margin: this.state.style.margin,
        width: this.state.style.width,
        height: this.state.style.height,
        backgroundColor: this.state.style.backgroundColor,
        borderRadius: this.state.style.borderRadius,
        border: "1px solid white",
        padding: "2px"
      },
      colorway_name: this.state.colorway_name,
      selectedStyle: this.state.selectedStyle
    })
    this.props.onClick(e);
  }

  render() {
    var isSelected = (this.props.selected_colorway === this.props.colorway_name);

    return (
      <div onMouseEnter={isSelected ? () => { return undefined; } : this.toggleHover} onMouseLeave={isSelected? () => { return undefined; } : this.toggleHover} style={isSelected ? this.state.selectedStyle : this.state.style} onClick={this.toggleClick} colorway_name={this.props.colorway_name}>
        <div style={this.props.background}/>
      </div>
    )
  }
}

export default StatefulButtonColor;