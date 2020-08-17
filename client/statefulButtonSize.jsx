import React from 'react';
import PropTypes from 'prop-types';

class StatefulButtonSize extends React.Component {
  constructor(props) {
    super(props);

    const { background } = this.props;
    const { backgroundImage } = background;

    this.state = {
      hover: false,
      stateBackgroundImage: backgroundImage,
    };

    this.toggleHover = this.toggleHover.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleHover() {
    const { hover } = this.state;
    if (!hover) {
      const { background } = this.props;
      this.setState((prevState) => ({
        hover: !prevState.hover,
        stateBackgroundImage: `url(https://dummyimage.com/42x42/dbdbdb&text=${background.backgroundImage.substr(-7, 6)})`,
      }));
    } else {
      const { background } = this.props;
      this.setState((prevState) => ({
        hover: !prevState.hover,
        stateBackgroundImage: `url(https://dummyimage.com/42x42/ffffff&text=${background.backgroundImage.substr(-7, 6)})`,
      }));
    }
  }

  toggleClick(e) {
    const { onClick } = this.props;
    e.preventDefault();
    this.setState(() => ({
      hover: false,
      stateBackgroundImage: `url(https://dummyimage.com/42x42/000000/ffffff&text=${this.sizeNamePlus()})`,
    }));
    onClick(e);
  }

  sizeNamePlus() {
    const { sizeName } = this.props;
    let sizeNameSizer = sizeName;
    if (sizeNameSizer.length === 1) {
      sizeNameSizer = sizeNameSizer.padEnd(3, '+');
    }
    if (sizeNameSizer.length === 2 || sizeNameSizer.length === 3) {
      sizeNameSizer = sizeNameSizer.padEnd(4, '+');
    }
    if (sizeNameSizer.length === 4) {
      sizeNameSizer = sizeNameSizer.padEnd(5, '+');
    }
    sizeNameSizer = sizeNameSizer.padStart(6, '+');
    return sizeNameSizer;
  }

  render() {
    const {
      selectedSize, sizeName, style, stock,
    } = this.props;
    const { background } = this.props;
    let { backgroundImage } = background;
    const {
      width, height, border, borderRadius,
    } = background;
    const { stateBackgroundImage } = this.state;
    if (stateBackgroundImage && stateBackgroundImage !== backgroundImage) {
      backgroundImage = stateBackgroundImage;
    }
    const isSelected = (selectedSize === sizeName);
    if (!isSelected && backgroundImage === `url(https://dummyimage.com/42x42/000000/ffffff&text=${this.sizeNamePlus()})`) {
      backgroundImage = `url(https://dummyimage.com/42x42/ffffff&text=${background.backgroundImage.substr(-7, 6)})`;
    }
    if (stock < 1) {
      backgroundImage = 'linear-gradient(to left top, rgba(207,207,207,0) 0%, rgba(207,207,207,0) calc(50% - 0.8px), rgba(207,207,207,1) 50%, rgba(207,207,207,0) calc(50% + 0.8px), rgba(207,207,207,0) 100%), ' + backgroundImage;
    }
    return (
      <div
        name={sizeName}
        onMouseEnter={isSelected ? () => undefined : this.toggleHover}
        onMouseLeave={isSelected ? () => undefined : this.toggleHover}
        style={style}
        onClick={this.toggleClick}
        onKeyDown={isSelected ? () => undefined : this.toggleClick}
        role="button"
        tabIndex="0"
      >
        <div
          name={sizeName}
          style={{
            width, height, border, borderRadius, backgroundImage,
          }}
        />
      </div>
    );
  }
}

StatefulButtonSize.propTypes = {
  style: PropTypes.objectOf(PropTypes.string).isRequired,
  background: PropTypes.objectOf(PropTypes.string).isRequired,
  selectedSize: PropTypes.string.isRequired,
  sizeName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default StatefulButtonSize;

/*
To turn testing back on
      className="size_button"
      name={this.props.size_name}
      onMouseEnter={isSele
*/
