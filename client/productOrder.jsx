import React from 'react';
import StatefulButtonColor from './statefulButtonColor.jsx';
import StatefulButton from './statefulButton.jsx';
import StatefulButtonSize from './statefulButtonSize.jsx';
import StatefulCartButton from './statefulCartButton.jsx';
import $ from 'jquery';

    var defaultCartStyle = {
      // send a default css package using a ternary in assignment
      // like this.state.selectedSize === '' ? defaultCartStyle : the other style
      display: "inline-block",
      padding: "3px",
      height: "48px",
      backgroundColor: "#cfcfcf",
      color: "#ffffff",
      border: "1px solid white",
      textAlign: "center",
      width: "95%"
    };
    //if (this.state.stock8 === 0) {
      // it's doing it twice, once on some kind of master render, then again later
      // could we nest the if statements and do them during render, only test once
      // we know it's defined? State....
    var oos8Style = {
      // send a default css package using a ternary in assignment
      // like this.state.stock8 === 0 ? oos8Style : the other style
        // this is where we draw a line through the
      backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=+++8++)",
      width: "42px",
      height: "42px",
      borderRadius: "3px",
      border: "1px solid black",
      background: "linearGradient(to top right, rgba(207,207,207,0) 0%, rgba(207,207,207,0) calc(50% - 0.8px), rgba(207,207,207,1) 50%, rgba(207,207,207,0) calc(50% + 0.8px), rgba(207,207,207,0) 100%)"
    };

class ProductOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColorway: 'Thunder (Dark Blue Upper / White Sole)',
      selectedSize: ''
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
    });
  }
  selectSize(e) {
    e.preventDefault();
    var innerSelectedSize = e.target.attributes[0].nodeValue;
    this.setState((prevState, props) => {
      return {
        ...prevState,
        selectedSize: innerSelectedSize,
      }
    });
  }

  render() {
    return (
      <div className="product_order">
        <div style={{fontSize: "small", paddingBottom: "10px"}}>
          <span style={{fontWeight: "bolder"}}>LIMITED EDITION: </span>{this.state.selectedColorway}
        </div>
        <div id="outer_colorway_holder" style={{display: "inline-block"}}>
          <div id="upper_colorway_holder" style={{display: "inline-block"}}>
            <StatefulButtonColor
            id="button_1"
            selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Thunder (Dark Blue Upper / White Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/0000ff&text=+)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
            <StatefulButtonColor
            selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Geyser (Light Blue Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/03a5fc&text=+)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
            <StatefulButtonColor
            selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Quartz (Light Gray Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/a8a8a8&text=+)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
            <StatefulButtonColor
            selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Obsidian (Black Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/000000&text=+)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
            <StatefulButtonColor
            selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Flame (Light Red Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/cf3527&text=+)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
            <StatefulButtonColor
            selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Bluster (Grey Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/6b6b6b&text=+)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
          </div>
          <div id="lower_colorway_holder">
            <StatefulButtonColor
            selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Blizzard (White Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/dedede&text=+)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
            <StatefulButtonColor
            selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Cyclone (Light Green Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/a8eb91&text=+)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
            <StatefulButtonColor
            selected_colorway={this.state.selectedColorway}
            onClick={this.selectShoe}
            colorway_name="Pukeko (White Sole)"
            background={{backgroundImage: "url(https://dummyimage.com/27x27/874956&text=+)", width: "30px", height: "30px", borderRadius: "50%"}}
            style={{display: "inline-block", margin: "3px", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid white", padding: "2px"}}/>
          </div>
        </div>
        <div id="outer_size_holder" style={{marginTop: "13px", paddingBottom: "8px"}}>
          <div>
            <div style={{width: "50%", align: "left", display: "inline-block", fontSize: "small"}}>SELECT SIZE:</div>
            <div style={{width: "50%", align: "right", display: "inline-block", fontSize: "small"}}><a href="#sold-out" >Size sold out?</a></div>
          </div>

          <div id="upper_size_holder" style={{marginTop: "5px"}}>
            <StatefulButtonSize
            id="button_2"
            selectedSize={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="8"
            style={{display: "inline-block", margin: "3px"}}
            background={this.props.parent_state.thunderx8Inventory !== 0 ? {backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=+++8++)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"} : oos8Style}/>
            <StatefulButtonSize
            selectedSize={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="8.5"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++8.5+)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
            <StatefulButtonSize
            selectedSize={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="9"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=+++9++)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
            <StatefulButtonSize
            selectedSize={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="9.5"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++9.5+)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
            <StatefulButtonSize
            selectedSize={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="10"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++10++)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
            <StatefulButtonSize
            selectedSize={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="10.5"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=+10.5+)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
            <StatefulButtonSize
            selectedSize={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="11"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++11++)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
          </div>
          <div id="lower_size_holder">
            <StatefulButtonSize
            selectedSize={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="11.5"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=+11.5+)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
            <StatefulButtonSize
            selectedSize={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="12"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++12++)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
            <StatefulButtonSize
            selectedSize={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="12.5"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=+12.5+)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
            <StatefulButtonSize
            selectedSize={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="13"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++13++)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
            <StatefulButtonSize
            selectedSize={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="13.5"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=+13.5+)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
            <StatefulButtonSize
            selectedSize={this.state.selectedSize}
            onClick={this.selectSize}
            size_name="14"
            style={{display: "inline-block", margin: "3px"}}
            background={{backgroundImage: "url(https://dummyimage.com/42x42/ffffff&text=++14++)", width: "42px", height: "42px", borderRadius: "3px", border: "1px solid black"}}/>
          </div>
        </div>
        <a href="#size-chart" style={{fontSize: "small"}}>See Size Chart</a>
        <div style={{marginTop: "10px"}}>
          <StatefulCartButton
          id="cart_button_1"
          onClick={this.handleSubmit}
          selectedColorway={this.state.selectedColorway}
          selectedSize={this.state.selectedSize}
          style={this.state.selectedSize === '' ? defaultCartStyle: {display: "inline-block", padding: "3px", height: "48px", backgroundColor: "#000000", color: "#ffffff", border: "2px solid black", textAlign: "center", width: "90%"}}/>
        </div>
      </div>
    )
  }
}

// the defaults I'm passing in are the problem/opportunity
export default ProductOrder;