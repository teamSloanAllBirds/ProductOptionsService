import React from 'react';
import StatefulButtonColor from './statefulButtonColor.jsx';
import StatefulButton from './statefulButton.jsx';
import StatefulButtonSize from './statefulButtonSize.jsx';
import StatefulCartButton from './statefulCartButton.jsx';
import $ from 'jquery';

class ProductOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColorway: 'Thunder (Dark Blue Upper / White Sole)',
      selectedSize: '',
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
    this.selectSize = this.selectSize.bind(this);
  }
  handleSubmit() {
    $.ajax({
      type: 'POST',
      url: '/shopping-cart/',
      data: {
        colorway: this.state.selectedColorway,
        size: this.state.selectedSize
      },
      success: (data) => {
        alert(data);
      }
    })
  }
  // componentDidMount() {
  // }
  selectShoe(e) {
    e.preventDefault();
    var innerSelectedColorway = e.target.parentNode.attributes[0].nodeValue;
    var innerSelectedColorwayToUsableString = innerSelectedColorway.split(' ')[0].toLowerCase();
    this.setState({
      selectedColorway: innerSelectedColorway,
      selectedSize: this.state.selectedSize,
      stock8: this.props.parent_state[`${innerSelectedColorwayToUsableString}x8Inventory`],
      stock85: this.props.parent_state[`${innerSelectedColorwayToUsableString}x85Inventory`],
      stock9: this.props.parent_state[`${innerSelectedColorwayToUsableString}x9Inventory`],
      stock95: this.props.parent_state[`${innerSelectedColorwayToUsableString}x95Inventory`],
      stock10: this.props.parent_state[`${innerSelectedColorwayToUsableString}x10Inventory`],
      stock105: this.props.parent_state[`${innerSelectedColorwayToUsableString}x105Inventory`],
      stock11: this.props.parent_state[`${innerSelectedColorwayToUsableString}x11Inventory`],
      stock115: this.props.parent_state[`${innerSelectedColorwayToUsableString}x115Inventory`],
      stock12: this.props.parent_state[`${innerSelectedColorwayToUsableString}x12Inventory`],
      stock125: this.props.parent_state[`${innerSelectedColorwayToUsableString}x125Inventory`],
      stock13: this.props.parent_state[`${innerSelectedColorwayToUsableString}x13Inventory`],
      stock135: this.props.parent_state[`${innerSelectedColorwayToUsableString}x135Inventory`],
      stock14: this.props.parent_state[`${innerSelectedColorwayToUsableString}x14Inventory`]
      // and we want to update the colorwaysxsizes now we just want to render them properly
    }, () => { console.log(this.state) });
  }
  selectSize(e) {
    e.preventDefault();
    this.setState({
      selectedColorway: this.state.selectedColorway,
      selectedSize: e.target.attributes[0].nodeValue,
      stock8: this.state.stock8,
      stock85: this.state.stock85,
      stock9: this.state.stock9,
      stock95: this.state.stock95,
      stock10: this.state.stock10,
      stock105: this.state.stock105,
      stock11: this.state.stock11,
      stock115: this.state.stock115,
      stock12: this.state.stock12,
      stock125: this.state.stock125,
      stock13: this.state.stock13,
      stock135: this.state.stock135,
      stock14: this.state.stock14
    });
  }

  render() {
    if (this.state.selectedSize === '') {
      var defaultCartStyle = {
        // send a default css package using a ternary in assignment
        // like this.state.selectedSize === '' ? defaultCartStyle : the other style
      };
    }
    if (this.state.stock8 === 0) {
      var oos8Style = {
        // send a default css package using a ternary in assignment
        // like this.state.stock8 === 0 ? oos8Style : the other style
          // this is where we draw a line through the
        };
    }
    return (
      <div>
        <div>
          LIMITED EDITION: {this.state.selectedColorway}
        </div>
        <div id="outer_colorway_holder" style={{display: "inline-block"}}>
          <div id="upper_colorway_holder" style={{display: "inline-block"}}>
            <StatefulButtonColor
            selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Thunder (Dark Blue Upper / White Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/0000ff)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
            <StatefulButtonColor
            selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Geyser (Light Blue Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/03a5fc)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
            <StatefulButtonColor
            selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Quartz (Light Gray Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/a8a8a8)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
            <StatefulButtonColor
            selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Obsidian (Black Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/000000)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
            <StatefulButtonColor
            selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Flame (Light Red Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/cf3527)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
            <StatefulButtonColor
            selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Bluster (Grey Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/6b6b6b)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
          </div>
          <div id="lower_colorway_holder">
            <StatefulButtonColor
            selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Blizzard (White Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/dedede)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
            <StatefulButtonColor
            selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Cyclone (Light Green Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/a8eb91)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
            <StatefulButtonColor
            selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Pukeko (White Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/874956)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
          </div>
        </div>
        <div id="outer_size_holder">
          <div>
            <div style={{width: "50%", align: "left", display: "inline-block"}}>SELECT SIZE:</div>
            <div style={{width: "50%", align: "right", display: "inline-block"}}><a href="#sold-out">Size sold out?</a></div>
          </div>

          <div id="upper_size_holder">
            <StatefulButtonSize
            selected_size={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="8"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=+++8++)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
            <StatefulButtonSize
            selected_size={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="8.5"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++8.5+)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
            <StatefulButtonSize
            selected_size={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="9"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=+++9++)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
            <StatefulButtonSize
            selected_size={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="9.5"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++9.5+)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
            <StatefulButtonSize
            selected_size={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="10"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++10++)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
            <StatefulButtonSize
            selected_size={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="10.5"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=+10.5+)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
            <StatefulButtonSize
            selected_size={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="11"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++11++)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
          </div>
          <div id="lower_size_holder">
            <StatefulButtonSize
            selected_size={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="11.5"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=+11.5+)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
            <StatefulButtonSize
            selected_size={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="12"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++12++)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
            <StatefulButtonSize
            selected_size={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="12.5"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=+12.5+)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
            <StatefulButtonSize
            selected_size={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="13"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++13++)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
            <StatefulButtonSize
            selected_size={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="13.5"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=+13.5+)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
            <StatefulButtonSize
            selected_size={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="14"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++14++)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
          </div>
        </div>
        <a href="#size-chart">See Size Chart</a>
        <div>
          <StatefulCartButton
          onClick={this.handleSubmit}
          selected_colorway={this.state.selectedColorway}
          selected_size={this.state.selectedSize}
          style={{display: "inline-block", padding: "3px", height: "48px", backgroundColor: "#cfcfcf", color: "#ffffff", border: "1px solid white", textAlign: "center", width: "68%"}}/>
        </div>
      </div>
    )
  }
}

export default ProductOrder;