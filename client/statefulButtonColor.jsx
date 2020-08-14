import React from 'react';
import PropTypes from 'prop-types';

class StatefulButtonColor extends React.Component {
  constructor(props) {
    super(props);
    const { style } = this.props;
    const {
      display, margin, width, height, borderRadius,
    } = style;
    this.state = {
      hover: false,
      style,
      selectedStyle: {
        display,
        margin,
        width,
        height,
        borderRadius,
        border: '2px solid #cfcfcf',
        padding: '1px',
      },
      stateBorder: '1px solid white',
      statePadding: '2px',
    };
    this.toggleHover = this.toggleHover.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleHover() {
    const { hover } = this.state;
    if (!hover) {
      this.setState((prevState) => ({
        hover: !prevState.hover,
        stateBorder: '1px solid #dedede',
        statePadding: '2px',
      }));
    } else {
      this.setState((prevState) => ({
        hover: !prevState.hover,
        stateBorder: '1px solid white',
        statePadding: '2px',
      }));
    }
  }

  toggleClick(e) {
    const { onClick } = this.props;
    e.preventDefault();
    this.setState(() => ({
      hover: false,
      stateBorder: '1px solid white',
      statePadding: '2px',
    }));
    onClick(e);
  }

  render() {
    const { selectedColorway, colorwayName, background } = this.props;
    const { selectedStyle, stateBorder, statePadding } = this.state;
    const { style } = this.state;
    let { border, padding } = style;
    const {
      display, margin, width, height, borderRadius,
    } = style;

    if (border !== stateBorder) {
      border = stateBorder;
    }
    if (padding !== statePadding) {
      padding = statePadding;
    }
    const isSelected = (selectedColorway === colorwayName);

    return (
      <div
        onMouseEnter={isSelected ? () => undefined : this.toggleHover}
        onMouseLeave={isSelected ? () => undefined : this.toggleHover}
        style={
          isSelected ? selectedStyle : {
            display, margin, width, height, borderRadius, border, padding,
          }
        }
        onClick={this.toggleClick}
        onKeyDown={isSelected ? () => undefined : this.toggleClick}
        colorwayName={colorwayName}
        role="button"
        tabIndex="0"
      >
        <div style={background} />
      </div>
    );
  }
}

StatefulButtonColor.propTypes = {
  selectedColorway: PropTypes.string.isRequired,
  background: PropTypes.objectOf(PropTypes.string).isRequired,
  style: PropTypes.objectOf(PropTypes.string).isRequired,
  colorwayName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default StatefulButtonColor;

/*
To turn testing back on
      <div
       className="color_button"
       onMouseEnter={isSelected ?
*/
