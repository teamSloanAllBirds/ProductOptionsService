import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StatefulCartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      style: this.props.style, // {style} = props
      selectedColorway: this.props.selectedColorway,
      selectedSize: this.props.selectedSize,
    };
    this.toggleHover = this.toggleHover.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleHover() {
    if (!this.state.hover) {
      this.setState({
        hover: !this.state.hover,
        style: {
          display: this.state.style.display,
          height: this.state.style.height,
          backgroundColor: '#ffffff',
          color: '#000000',
          padding: this.state.style.padding,
          border: this.state.style.border,
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
          border: this.state.style.border,
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
    this.props.onClick(e);
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
