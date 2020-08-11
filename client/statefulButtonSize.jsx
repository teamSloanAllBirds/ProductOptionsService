import React from 'react';

class StatefulButtonSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      style: this.props.style,
      selectedStyle: {
        display: this.props.style.display,
        margin: this.props.style.margin,
        width: this.props.style.width,
        height: this.props.style.height,
        backgroundColor: this.props.style.backgroundColor,
        borderRadius: this.props.style.borderRadius,
        border: this.props.style.border,
        padding: this.props.style.padding,
      },
      background: this.props.background
    }
    this.toggleHover = this.toggleHover.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }
  toggleHover() {
    if (!this.state.hover) {
      this.setState({
        hover: !this.state.hover,
        style: this.state.style,
        selectedStyle: this.state.selectedStyle,
        background: {
          backgroundImage: `url(https://dummyimage.com/42x42/dbdbdb&text=${this.state.background.backgroundImage.substr(-7, 6)})`,
          width: this.state.background.width,
          height: this.state.background.height,
          borderRadius: this.state.background.borderRadius,
          border: this.state.background.border
        }
      });
    } else {
      this.setState({
        hover: !this.state.hover,
        style: this.state.style,
        selectedStyle: this.state.selectedStyle,
        background: {
          backgroundImage: `url(https://dummyimage.com/42x42/ffffff&text=${this.state.background.backgroundImage.substr(-7, 6)})`,
          width: this.state.background.width,
          height: this.state.background.height,
          borderRadius: this.state.background.borderRadius,
          border: this.state.background.border
        }
      });
    }
  }
  toggleClick(e) {
    e.preventDefault();
    this.setState({
      hover: false,
      style: this.state.style,
      selectedStyle: this.state.selectedStyle,
      background: {
        backgroundImage: `url(https://dummyimage.com/42x42/000000/ffffff&text=${this.sizeNamePlus()})`,
        width: this.state.background.width,
        height: this.state.background.height,
        borderRadius: this.state.background.borderRadius,
        border: this.state.background.border
      }
    })
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
    var isSelected = (this.props.selected_size === this.props.size_name);

    return (
      <div
      name={this.props.size_name}
      onMouseEnter={isSelected ? () => { return undefined; } : this.toggleHover}
      onMouseLeave={isSelected ? () => { return undefined; } : this.toggleHover}
      style={this.state.style} onClick={this.toggleClick}>
        <div
        name={this.props.size_name}
        style={this.state.background}>
        </div>
      </div>
    )
  }
}

export default StatefulButtonSize;