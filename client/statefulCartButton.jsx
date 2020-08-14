import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StatefulCartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
<<<<<<< HEAD
      style: this.props.style, // {style} = props
      selectedColorway: this.props.selectedColorway,
      selectedSize: this.props.selectedSize,
    };
=======
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
>>>>>>> abc3233eda80d0c5fcb546db7ffbef7d9be5d532
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
          backgroundColor: '#ffffff',
          color: '#000000',
          padding: this.state.style.padding,
          border: "1px solid black",
          margin: this.state.style.margin,
          textAlign: this.state.style.textAlign,
          width: this.state.style.width,
        },
        selectedColorway: this.state.selectedColorway,
        selectedSize: this.state.selectedSize,
      });
    } else {
      this.setState({
        hover: !this.state.hover,
        style: {
          display: this.state.style.display,
          height: this.state.style.height,
          backgroundColor: '#000000',
          color: '#ffffff',
          padding: this.state.style.padding,
          border: "1px solid black",
          margin: this.state.style.margin,
          textAlign: this.state.style.textAlign,
          width: this.state.style.width,
        },
        selectedColorway: this.state.selectedColorway,
        selectedSize: this.state.selectedSize,
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
    const {
      style, selectedSize,
    } = this.props;
    let buttonText;
    if (selectedSize === '') {
      buttonText = 'SELECT A SIZE';
    } else {
      buttonText = 'ADD TO CART';
    }
    return (
      <div
        className="cart_button"
        onMouseEnter={selectedSize === '' ? () => undefined : this.toggleHover}
        onMouseLeave={selectedSize === '' ? () => undefined : this.toggleHover}
        style={style}
        onClick={selectedSize === '' ? () => undefined : this.toggleClick}>
        <div style={{ padding: '17px 0', width: '90%' }}>
          &nbsp;&nbsp;&nbsp;
          {buttonText}
          &nbsp;&nbsp;&nbsp;
        </div>
      </div>
    );
  }
}

StatefulCartButton.propTypes = {
  style: PropTypes.objectOf(PropTypes.object).isRequired,
  selectedColorway: PropTypes.string.isRequired,
  selectedSize: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default StatefulCartButton;
