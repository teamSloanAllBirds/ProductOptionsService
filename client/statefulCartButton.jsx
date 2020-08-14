import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StatefulCartButton extends Component {
  constructor(props) {
    super(props);
    const { style, selectedSize, selectedColorway } = this.props;
    this.state = {
      hover: false,
      style, // {style} = props
      selectedColorway,
      selectedSize,
    };
    this.toggleHover = this.toggleHover.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleHover() {
    const { hover } = this.state;
    if (!hover) {
      this.setState((prevState) => ({
        ...prevState,
        hover: !prevState.hover,
        style: {
          ...prevState.style,
          backgroundColor: '#ffffff',
          color: '#000000',
          border: '1px solid black',
        },
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        hover: !prevState.hover,
        style: {
          ...prevState.style,
          backgroundColor: '#000000',
          color: '#ffffff',
          border: '1px solid black',
        },
      }));
    }
  }

  toggleClick(e) {
    const { onClick } = this.props;
    e.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      style: {
        ...prevState.style,
        backgroundColor: '#000000',
        color: '#ffffff',
      },
    }));
    onClick(e);
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
        onClick={selectedSize === '' ? () => undefined : this.toggleClick}
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
  selectedColorway: PropTypes.string.isRequired,
  selectedSize: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default StatefulCartButton;
