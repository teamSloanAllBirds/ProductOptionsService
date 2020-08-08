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
        <div id="outer_colorway_holder" style={{display: "inline-block"}}>
          <div id="upper_colorway_holder" style={{display: "inline-block"}}>
            <StatefulButton text="Thunder (Dark Blue Upper/White Sole" style={{display: "inline-block"}}/>
            <StatefulButton text="Geyser (Light Blue Sole)" style={{display: "inline-block"}}/>
            <StatefulButton text="Quartz (Light Grey Sole" style={{display: "inline-block"}}/>
            <StatefulButton text="Obsidian (Black Sole" style={{display: "inline-block"}}/>
            <StatefulButton text="Flame (Light Red Sole)" style={{display: "inline-block"}}/>
            <StatefulButton text="Bluster (Grey Sole)" style={{display: "inline-block"}}/>
          </div>
          <div id="lower_colorway_holder">
            <StatefulButton text="Blizzard (White Sole" style={{display: "inline-block"}}/>
            <StatefulButton text="Cyclone (Light Green Sole)" style={{display: "inline-block"}}/>
            <StatefulButton text="Pukeko (White Sole)" style={{display: "inline-block"}}/>
          </div>
        </div>
        <div id="outer_size_holder">
          <div id="upper_size_holder">
            <StatefulButton text="8" style={{display: "inline-block"}}/>
            <StatefulButton text="8.5" style={{display: "inline-block"}}/>
            <StatefulButton text="9" style={{display: "inline-block"}}/>
            <StatefulButton text="9.5" style={{display: "inline-block"}}/>
            <StatefulButton text="10" style={{display: "inline-block"}}/>
            <StatefulButton text="10.5" style={{display: "inline-block"}}/>
            <StatefulButton text="11" style={{display: "inline-block"}}/>
          </div>
          <div id="lower_size_holder">
            <StatefulButton text="11.5" style={{display: "inline-block"}}/>
            <StatefulButton text="12" style={{display: "inline-block"}}/>
            <StatefulButton text="12.5" style={{display: "inline-block"}}/>
            <StatefulButton text="13" style={{display: "inline-block"}}/>
            <StatefulButton text="13.5" style={{display: "inline-block"}}/>
            <StatefulButton text="14" style={{display: "inline-block"}}/>
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