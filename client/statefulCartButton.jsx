import React from 'react';

class StatefulCartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      style: this.props.selected_size === '' ? this.props.style : {
        display: this.props.style.display,
        height: this.props.style.height,
        backgroundColor: "#000000",
        color: "#ffffff",
        padding: this.props.style.padding,
        border: "2px solid black",
        margin: this.state.style.margin,
        textAlign: this.state.style.textAlign,
        width: this.state.style.width
      },
      selected_colorway: this.props.selected_colorway,
      selected_size: this.props.selected_size
    }
    this.toggleHover = this.toggleHover.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleHover() {
    console.log('inToggleHover');
    if (!this.state.hover) {
      this.setState({
        hover: !this.state.hover,
        style: {
          display: this.state.style.display,
          height: this.state.style.height,
          backgroundColor: "#ffffff",
          color: "#000000",
          padding: this.state.style.padding,
          border: "1px solid black",
          margin: this.state.style.margin,
          textAlign: this.state.style.textAlign,
          width: this.state.style.width
        },
        selected_colorway: this.state.selected_colorway,
        selected_size: this.state.selected_size
      });
    } else {
      this.setState({
        hover: !this.state.hover,
        style: {
          display: this.state.style.display,
          height: this.state.style.height,
          backgroundColor: "#000000",
          color: "#ffffff",
          padding: this.state.style.padding,
          border: "1px solid black",
          margin: this.state.style.margin,
          textAlign: this.state.style.textAlign,
          width: this.state.style.width
        },
        selected_colorway: this.state.selected_colorway,
        selected_size: this.state.selected_size
      });
    }
  }
  toggleClick(e) {
    e.preventDefault();
    this.setState({
      hover: this.state.hover,
      style: {
        display: this.state.style.display,
        height: this.state.style.height,
        backgroundColor: "#000000",
        color: "#ffffff",
        padding: this.state.style.padding,
        border: this.state.style.border,
        margin: this.state.style.margin,
        textAlign: this.state.style.textAlign,
        width: this.state.style.width
      },
      selected_colorway: this.state.selected_colorway,
      selected_size: this.state.selected_size
    });
    this.props.onClick(e)
  }
  render() {
    var buttonText;
    if (this.props.selected_size === '') {
      buttonText = 'SELECT A SIZE';
    } else {
      buttonText = 'ADD TO CART';
    }
    return (
      <div
      className="cart_button"
      onMouseEnter={this.props.selected_size === '' ? () => { return undefined; } : this.toggleHover}
      onMouseLeave={this.props.selected_size === '' ? () => { return undefined; } : this.toggleHover}
      style={this.props.selected_size === '' ? this.props.style : this.state.style}
      onClick={this.props.selected_size === '' ? () => { return undefined; } : this.toggleClick}>
        <div style={{padding: "17px 0", width: "90%"}}>
          &nbsp;&nbsp;&nbsp;{buttonText}&nbsp;&nbsp;&nbsp;</div>
      </div>
    )
  }
}

export default StatefulCartButton;