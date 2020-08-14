import React from 'react';
import PropTypes from 'prop-types';

class StatefulButton extends React.Component {
  constructor(props) {
    super(props);
    const { style } = this.props;
    this.state = {
      style,
    };
  }

  render() {
    const {
      selectedDescription, descriptionName, onClick, text,
    } = this.props;
    const { style } = this.state;
    let isSelected = false;
    if (selectedDescription === descriptionName) {
      isSelected = true;
    }
    return (
      <div
        name={descriptionName}
        className="stateful_button"
        style={style}
        onClick={onClick}
        onKeyDown={isSelected ? () => undefined : onClick}
        role="button"
        tabIndex="0"
      >
        {descriptionName}
        <div
          style={
          isSelected ? {
            display: 'inline-block', marginLeft: '4px', marginTop: '2px', marginBottom: '2px',
          } : {
            padding: '17px 0', display: 'none',
          }
          }
        >
          {text}
        </div>
      </div>
    );
  }
}

StatefulButton.propTypes = {
  style: PropTypes.objectOf(PropTypes.string).isRequired,
  selectedDescription: PropTypes.string.isRequired,
  descriptionName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default StatefulButton;
