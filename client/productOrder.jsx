import React from 'react';
import StatefulButton from './statefulButton.jsx';

class ProductOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColorway: 'Thunder (Dark Blue Upper / White Sole'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {

  }
  render() {
    return (
      <div>
        <div>
          LIMITED EDITION: {this.state.selectedColorway}
        </div>
        <div id="outer_colorway_holder">
          <div id="upper_colorway_holder">
            <StatefulButton />
            <StatefulButton />
            <StatefulButton />
            <StatefulButton />          <StatefulButton />
            <StatefulButton />
          </div>
          <div id="lower_colorway_holder">
            <StatefulButton />
            <StatefulButton />
            <StatefulButton />
          </div>
        </div>
        <div id="outer_size_holder">
          <div id="upper_size_holder">
            <StatefulButton />
            <StatefulButton />
            <StatefulButton />
            <StatefulButton />          <StatefulButton />
            <StatefulButton />
            <StatefulButton />
          </div>
          <div id="lower_size_holder">
            <StatefulButton />
            <StatefulButton />
            <StatefulButton />
            <StatefulButton />
            <StatefulButton />
          </div>
        </div>
        See Size Chart
        <div id="take_action_button">
          <StatefulButton />
        </div>
      </div>
    )
  }
}

export default ProductOrder;