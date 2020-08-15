import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StatefulCartButton extends Component {
  constructor(props) {
    super(props);
    const { style } = this.props;
    const {
      backgroundColor, color, border,
    } = style;
    this.state = {
      hover: false,
      stateBackgroundColor: backgroundColor,
      stateColor: color,
      stateBorder: border,
    };
    this.toggleHover = this.toggleHover.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleHover() {
    const { hover } = this.state;
    if (!hover) {
      this.setState((prevState) => ({
        hover: !prevState.hover,
        stateBackgroundColor: '#ffffff',
        stateColor: '#000000',
        stateBorder: '1px solid black',
      }));
    } else {
      this.setState((prevState) => ({
        hover: !prevState.hover,
        stateBackgroundColor: '#000000',
        stateColor: '#ffffff',
        stateBorder: '1px solid black',
      }));
    }
  }

  toggleClick(e) {
    const { onClick } = this.props;
    e.preventDefault();
    this.setState(() => ({
      hover: true,
      stateBackgroundColor: '#000000',
      stateColor: '#ffffff',
    }));
    onClick(e);
  }

  render() {
    const {
      style, selectedSize,
    } = this.props;
    const {
      display, padding, height, textAlign, width,
    } = style;
    let { backgroundColor, color, border } = style;
    const { stateBackgroundColor, stateBorder, stateColor } = this.state;
    if (backgroundColor !== stateBackgroundColor && stateBackgroundColor) {
      backgroundColor = stateBackgroundColor;
    }
    if (color !== stateColor && stateColor) {
      color = stateColor;
    }
    if (border !== stateBorder && stateBorder) {
      border = stateBorder;
    }

    let buttonText;
    if (selectedSize === '') {
      buttonText = 'SELECT A SIZE';
    } else {
      buttonText = 'ADD TO CART';
      if (backgroundColor === '#cfcfcf') {
        color = '#ffffff';
        backgroundColor = '#000000';
        border = '1px solid black';
      }
    }

    return (
      <div
        className="cart_button"
        onMouseEnter={selectedSize === '' ? () => undefined : this.toggleHover}
        onMouseLeave={selectedSize === '' ? () => undefined : this.toggleHover}
        style={{
          display,
          padding,
          height,
          backgroundColor,
          color,
          border,
          textAlign,
          width,
        }}
        onClick={
          selectedSize === '' ? () => undefined : this.toggleClick
        }
        onKeyDown={selectedSize === '' ? () => undefined : this.toggleHover}
        role="button"
        tabIndex="0"
      >
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
  style: PropTypes.objectOf(PropTypes.string).isRequired,
  selectedSize: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default StatefulCartButton;
