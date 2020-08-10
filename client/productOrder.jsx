import React from 'react';
import StatefulButton from './statefulButton.jsx';

class ProductOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColorway: 'Thunder (Dark Blue Upper / White Sole',
      stock8: this.props.parent_state.thunderx8Inventory,
      stock85: this.props.parent_state.thunderx85Inventory,
      stock9: this.props.parent_state.thunderx9Inventory,
      stock95: this.props.parent_state.thunderx95Inventory,
      stock10: this.props.parent_state.thunderx10Inventory,
      stock105: this.props.parent_state.thunderx105Inventory,
      stock11: this.props.parent_state.thunderx11Inventory,
      stock115: this.props.parent_state.thunderx115Inventory,
      stock12: this.props.parent_state.thunderx12Inventory,
      stock125: this.props.parent_state.thunderx125Inventory,
      stock13: this.props.parent_state.thunderx13Inventory,
      stock135: this.props.parent_state.thunderx135Inventory,
      stock14: this.props.parent_state.thunderx14Inventory
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {

  }
  componentDidMount() {


  }



  render() {
    function appendSVGButton(state, shoeSize) {
      if (state) {
        return (
        <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
        <g>
        <title>background</title>
        <rect fill="#fff" id="canvas_background" height="50" width="50" y="0" x="0"/>
          <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
            <rect fill="url(#gridpattern)" strokeWidth="0" y="0" x="0" height="100%" width="100%"/>
          </g>
        </g>
        <g>
           <title>Layer 1</title>
           <rect rx="4" id="svg_2" height="50" width="50" y="0" x="0" stroke="#000" fill="none"/>
           <text textAnchor="start" fontFamily="Arvo, sans-serif" fontSize="15" id="svg_3" y="30" x="19.5" strokeWidth="0" stroke="#000" fill="#000000">{shoeSize}</text>
        </g>
      </svg>)
      } else {
        return (
          <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
          <g>
          <title>background</title>
          <rect fill="#fff" id="canvas_background" height="50" width="50" y="0" x="0"/>
            <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
              <rect fill="url(#gridpattern)" strokeWidth="0" y="0" x="0" height="100%" width="100%"/>
            </g>
          </g>
          <g>
            <title>Layer 1</title>
            <rect rx="4" id="svg_2" height="50" width="50" y="0" x="0" stroke="#000" fill="none"/>
            <line strokeLinecap="null" strokeLinejoin="null" id="svg_4" y2="50" x2="0" y1="0" x1="50" fillOpacity="null" strokeOpacity="null" strokeWidth="null" stroke="#d9d9d9" fill="none"/>
            <text textAnchor="start" fontFamily="Arvo, sans-serif" fontSize="15" id="svg_3" y="30" x="19.5" strokeWidth="0" stroke="#000" fill="#000000">{shoeSize}</text>
          </g>
        </svg>
        )
      }

    }
    var button8, button85, button9, button95, button10, button105, button11, button115, button12, button125, button13, button135, button14;
    button8 = appendSVGButton(this.props.parent_state.thunderx8Inventory, 8);
    button85 = appendSVGButton(this.props.parent_state.thunderx85Inventory, 8.5);
    button9 = appendSVGButton(this.props.parent_state.thunderx9Inventory, 9);
    button95 = appendSVGButton(this.props.parent_state.thunderx95Inventory, 9.5);
    button10 = appendSVGButton(this.props.parent_state.thunderx10Inventory, 10);
    button105 = appendSVGButton(this.props.parent_state.thunderx105Inventory, 10.5);
    button11 = appendSVGButton(this.props.parent_state.thunderx11Inventory, 11);
    button115 = appendSVGButton(this.props.parent_state.thunderx115Inventory, 11.5);
    button12 = appendSVGButton(this.props.parent_state.thunderx12Inventory, 12);
    button125 = appendSVGButton(this.props.parent_state.thunderx125Inventory, 12.5);
    button13 = appendSVGButton(this.props.parent_state.thunderx13Inventory, 13);
    button135 = appendSVGButton(this.props.parent_state.thunderx135Inventory, 13.5);
    button14 = appendSVGButton(this.props.parent_state.thunderx14Inventory, 14);

    return (

      <div>

        <div>
          LIMITED EDITION: {this.state.selectedColorway}
        </div>
        <div id="outer_colorway_holder" style={{display: "inline-block"}}>
          <div id="upper_colorway_holder" style={{display: "inline-block"}}>
            <StatefulButton text="Thunder (Dark Blue Upper/White Sole" style={{display: "inline-block", padding: "3px"}}/>
            <StatefulButton text="Geyser (Light Blue Sole)" style={{display: "inline-block", padding: "3px"}}/>
            <StatefulButton text="Quartz (Light Grey Sole" style={{display: "inline-block", padding: "3px"}}/>
            <StatefulButton text="Obsidian (Black Sole" style={{display: "inline-block", padding: "3px"}}/>
            <StatefulButton text="Flame (Light Red Sole)" style={{display: "inline-block", padding: "3px"}}/>
            <StatefulButton text="Bluster (Grey Sole)" style={{display: "inline-block", padding: "3px"}}/>
          </div>
          <div id="lower_colorway_holder">
            <StatefulButton text="Blizzard (White Sole" style={{display: "inline-block", padding: "3px"}}/>
            <StatefulButton text="Cyclone (Light Green Sole)" style={{display: "inline-block", padding: "3px"}}/>
            <StatefulButton text="Pukeko (White Sole)" style={{display: "inline-block", padding: "3px"}}/>
          </div>
        </div>
        <div id="outer_size_holder">
          <div id="upper_size_holder">
            <StatefulButton style={{display: "inline-block", padding: "3px"}} image={button8}/>
            <StatefulButton style={{display: "inline-block", padding: "3px"}} image={button85}/>
            <StatefulButton style={{display: "inline-block", padding: "3px"}} image={button9}/>
            <StatefulButton style={{display: "inline-block", padding: "3px"}} image={button95}/>
            <StatefulButton style={{display: "inline-block", padding: "3px"}} image={button10}/>
            <StatefulButton style={{display: "inline-block", padding: "3px"}} image={button105}/>
            <StatefulButton style={{display: "inline-block", padding: "3px"}} image={button11}/>
          </div>
          <div id="lower_size_holder">
            <StatefulButton style={{display: "inline-block", padding: "3px"}} image={button115}/>
            <StatefulButton style={{display: "inline-block", padding: "3px"}} image={button12}/>
            <StatefulButton style={{display: "inline-block", padding: "3px"}} image={button125}/>
            <StatefulButton style={{display: "inline-block", padding: "3px"}} image={button13}/>
            <StatefulButton style={{display: "inline-block", padding: "3px"}} image={button135}/>
            <StatefulButton style={{display: "inline-block", padding: "3px"}} image={button14}/>
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