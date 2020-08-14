import React from 'react';

class StatefulButtonSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      style: this.props.style,
      background: this.props.background,
      selectedSize: this.props.selected_size,
      sizeName: this.props.size_name
    }
    this.toggleHover = this.toggleHover.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }
  toggleHover() {
    if (!this.state.hover) {
      this.setState((prevState, props) => {
        return {
          ...prevState,
          hover: !prevState.hover,
          background: {
            ...prevState.background,
            backgroundImage: `url(https://dummyimage.com/42x42/dbdbdb&text=${this.state.background.backgroundImage.substr(-7, 6)})`
          }
        }
      });
    } else {
      this.setState((prevState, props) => {
        return {
          ...prevState,
          hover: !prevState.hover,
          background: {
            ...prevState.background,
            backgroundImage: `url(https://dummyimage.com/42x42/ffffff&text=${this.state.background.backgroundImage.substr(-7, 6)})`
          }
        }
      });
    }
  }

  toggleClick(e) {
    e.preventDefault();
    this.setState((prevState, props) =>{
      return {
        ...prevState,
        hover: false,
        background: {
          ...prevState.background,
          backgroundImage: `url(https://dummyimage.com/42x42/000000/ffffff&text=${this.sizeNamePlus()})`
        }
      }
    });
    this.props.onClick(e);
  }

  sizeNamePlus() {
    var sizeNameSizer = this.props.size_name;
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
    var isSelected = (this.props.selectedSize === this.props.size_name);

    return (
      <div
      name={this.props.size_name}
      onMouseEnter={isSelected ? () => { return undefined; } : this.toggleHover}
      onMouseLeave={isSelected ? () => { return undefined; } : this.toggleHover}
      style={this.props.style} onClick={this.toggleClick}>
        <div
        name={this.props.size_name}
        style={this.state.background}>
        </div>
      </div>
    )
  }
}

export default StatefulButtonSize;

/*
To turn testing back on
      className="size_button"
      name={this.props.size_name}
      onMouseEnter={isSele
*/