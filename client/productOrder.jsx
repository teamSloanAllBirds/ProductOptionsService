import React from 'react';
import StatefulButton from './statefulButton.jsx';

class ProductOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColorway: 'Thunder (Dark Blue Upper / White Sole)',
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
    this.selectShoe = this.selectShoe.bind(this);
  }
  handleSubmit() {

  }
  componentDidMount() {


  }
  selectShoe(e) {
    e.preventDefault();
    this.setState({
      // changing the styling of the selected item has been a pain
      selectedColorway: e.target.parentNode.attributes[0].nodeValue
      // and we want to update the colorwaysxsizes
    });
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
            <StatefulButton selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Thunder (Dark Blue Upper / White Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/0000ff)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
            <StatefulButton selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Geyser (Light Blue Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/03a5fc)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
            <StatefulButton selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Quartz (Light Gray Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/a8a8a8)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
            <StatefulButton selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Obsidian (Black Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/000000)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
            <StatefulButton selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Flame (Light Red Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/cf3527)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
            <StatefulButton selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Bluster (Grey Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/6b6b6b)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
          </div>
          <div id="lower_colorway_holder">
            <StatefulButton selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Blizzard (White Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/dedede)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
            <StatefulButton selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Cyclone (Light Green Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/a8eb91)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
            <StatefulButton selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Pukeko (White Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/874956)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
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
          <StatefulButton style={{display: "inline-block", padding: "3px"}}/>
        </div>
      </div>
    )
  }
}

export default ProductOrder;