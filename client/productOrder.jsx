import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import StatefulButtonColor from './statefulButtonColor.jsx';
import StatefulButtonSize from './statefulButtonSize.jsx';
import StatefulCartButton from './statefulCartButton.jsx';

const defaultCartStyle = {
  display: 'inline-block',
  padding: '3px',
  height: '48px',
  backgroundColor: '#cfcfcf',
  color: '#ffffff',
  border: '1px solid white',
  textAlign: 'center',
  width: '95%',
};

const oos8Style = {
  backgroundImage: 'url(https://dummyimage.com/42x42/ffffff&text=+++8++), linear-gradient(to top right, rgba(207,207,207,0) 0%, rgba(207,207,207,0) calc(50% - 0.8px), rgba(207,207,207,1) 50%, rgba(207,207,207,0) calc(50% + 0.8px), rgba(207,207,207,0) 100%)',
  width: '42px',
  height: '42px',
  borderRadius: '3px',
  border: '1px solid black',
};

class ProductOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColorway: 'Thunder (Dark Blue Upper / White Sole)',
      selectedSize: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectShoe = this.selectShoe.bind(this);
    this.selectSize = this.selectSize.bind(this);
  }

  handleSubmit() {
    const { selectedColorway, selectedSize } = this.state;
    $.ajax({
      type: 'POST',
      url: '/shopping-cart/',
      data: {
        colorway: selectedColorway,
        size: selectedSize,
      },
      success: (data) => {
        alert(data);
      },
    });
  }

  selectShoe(e) {
    e.preventDefault();
    const { parentState } = this.props;
    const { selectedSize } = this.state;
    const innerSelectedColorway = e.target.parentNode.attributes[0].nodeValue;
    const innerSelectedColorwayToUsableString = innerSelectedColorway.split(' ')[0].toLowerCase();
    this.setState({
      selectedColorway: innerSelectedColorway,
      selectedSize,
      stock8: parentState[`${innerSelectedColorwayToUsableString}x8Inventory`],
      stock85: parentState[`${innerSelectedColorwayToUsableString}x85Inventory`],
      stock9: parentState[`${innerSelectedColorwayToUsableString}x9Inventory`],
      stock95: parentState[`${innerSelectedColorwayToUsableString}x95Inventory`],
      stock10: parentState[`${innerSelectedColorwayToUsableString}x10Inventory`],
      stock105: parentState[`${innerSelectedColorwayToUsableString}x105Inventory`],
      stock11: parentState[`${innerSelectedColorwayToUsableString}x11Inventory`],
      stock115: parentState[`${innerSelectedColorwayToUsableString}x115Inventory`],
      stock12: parentState[`${innerSelectedColorwayToUsableString}x12Inventory`],
      stock125: parentState[`${innerSelectedColorwayToUsableString}x125Inventory`],
      stock13: parentState[`${innerSelectedColorwayToUsableString}x13Inventory`],
      stock135: parentState[`${innerSelectedColorwayToUsableString}x135Inventory`],
      stock14: parentState[`${innerSelectedColorwayToUsableString}x14Inventory`],
    });
  }

  selectSize(e) {
    e.preventDefault();
    const innerSelectedSize = e.target.attributes[0].nodeValue;
    this.setState((prevState) => ({
      ...prevState,
      selectedSize: innerSelectedSize,
    }));
  }

  render() {
    const { selectedColorway, selectedSize } = this.state;
    const { parentState } = this.props;
    console.log('parentState.thunderx8Inventory ', parentState.thunderx8Inventory, !!parentState.thunderx8Inventory);
    return (
      <div
        className="product_order"
      >
        <div
          style={{
            fontSize: 'small',
            paddingBottom: '10px',
          }}
        >
          <span
            style={{
              fontWeight: 'bolder',
            }}
          >
            LIMITED EDITION:
          </span>
          {selectedColorway}
        </div>
        <div
          id="outer_colorway_holder"
          style={{
            display: 'inline-block',
          }}
        >
          <div
            id="upper_colorway_holder"
            style={{
              display: 'inline-block',
            }}
          >
            <StatefulButtonColor
              id="button_1"
              selectedColorway={selectedColorway}
              onClick={this.selectShoe}
              colorwayName="Thunder (Dark Blue Upper / White Sole)"
              background={{
                backgroundImage: 'url(https://dummyimage.com/27x27/0000ff&text=+)',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
              }}
              style={{
                display: 'inline-block',
                margin: '3px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: '1px solid white',
                padding: '2px',
              }}
            />
            <StatefulButtonColor
              selectedColorway={selectedColorway}
              onClick={this.selectShoe}
              colorwayName="Geyser (Light Blue Sole)"
              background={{
                backgroundImage: 'url(https://dummyimage.com/27x27/03a5fc&text=+)',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
              }}
              style={{
                display: 'inline-block',
                margin: '3px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: '1px solid white',
                padding: '2px',
              }}
            />
            <StatefulButtonColor
              selectedColorway={selectedColorway}
              onClick={this.selectShoe}
              colorwayName="Quartz (Light Gray Sole)"
              background={{
                backgroundImage: 'url(https://dummyimage.com/27x27/a8a8a8&text=+)',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
              }}
              style={{
                display: 'inline-block',
                margin: '3px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: '1px solid white',
                padding: '2px',
              }}
            />
            <StatefulButtonColor
              selectedColorway={selectedColorway}
              onClick={this.selectShoe}
              colorwayName="Obsidian (Black Sole)"
              background={{
                backgroundImage: 'url(https://dummyimage.com/27x27/000000&text=+)',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
              }}
              style={{
                display: 'inline-block',
                margin: '3px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: '1px solid white',
                padding: '2px',
              }}
            />
            <StatefulButtonColor
              selectedColorway={selectedColorway}
              onClick={this.selectShoe}
              colorwayName="Flame (Light Red Sole)"
              background={{
                backgroundImage: 'url(https://dummyimage.com/27x27/cf3527&text=+)',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
              }}
              style={{
                display: 'inline-block',
                margin: '3px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: '1px solid white',
                padding: '2px',
              }}
            />
            <StatefulButtonColor
              selectedColorway={selectedColorway}
              onClick={this.selectShoe}
              colorwayName="Bluster (Grey Sole)"
              background={{
                backgroundImage: 'url(https://dummyimage.com/27x27/6b6b6b&text=+)',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
              }}
              style={{
                display: 'inline-block',
                margin: '3px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: '1px solid white',
                padding: '2px',
              }}
            />
          </div>
          <div
            id="lower_colorway_holder"
          >
            <StatefulButtonColor
              selectedColorway={selectedColorway}
              onClick={this.selectShoe}
              colorwayName="Blizzard (White Sole)"
              background={{
                backgroundImage: 'url(https://dummyimage.com/27x27/dedede&text=+)',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
              }}
              style={{
                display: 'inline-block',
                margin: '3px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: '1px solid white',
                padding: '2px',
              }}
            />
            <StatefulButtonColor
              selectedColorway={selectedColorway}
              onClick={this.selectShoe}
              colorwayName="Cyclone (Light Green Sole)"
              background={{
                backgroundImage: 'url(https://dummyimage.com/27x27/a8eb91&text=+)',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
              }}
              style={{
                display: 'inline-block',
                margin: '3px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: '1px solid white',
                padding: '2px',
              }}
            />
            <StatefulButtonColor
              selectedColorway={selectedColorway}
              onClick={this.selectShoe}
              colorwayName="Pukeko (White Sole)"
              background={{
                backgroundImage: 'url(https://dummyimage.com/27x27/874956&text=+)',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
              }}
              style={{
                display: 'inline-block',
                margin: '3px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: '1px solid white',
                padding: '2px',
              }}
            />
          </div>
        </div>
        <div
          id="outer_size_holder"
          style={{
            marginTop: '13px',
            paddingBottom: '8px',
          }}
        >
          <div>
            <div
              style={{
                width: '50%',
                align: 'left',
                display: 'inline-block',
                fontSize: 'small',
              }}
            >
              SELECT SIZE:
            </div>
            <div
              style={{
                width: '50%',
                align: 'right',
                display: 'inline-block',
                fontSize: 'small',
              }}
            >
              <a
                href="#sold-out"
              >
                Size sold out?
              </a>
            </div>
          </div>

          <div
            id="upper_size_holder"
            style={{
              marginTop: '5px',
            }}
          >
            <StatefulButtonSize
              id="button_2"
              selectedSize={selectedSize}
              onClick={this.selectSize}
              sizeName="8"
              style={{
                display: 'inline-block',
                margin: '3px',
              }}
              background={!!parentState.thunderx8Inventory
                ? {
                  backgroundImage: 'url(https://dummyimage.com/42x42/ffffff&text=+++8++)',
                  width: '42px',
                  height: '42px',
                  borderRadius: '3px',
                  border: '1px solid black',
                }
                : oos8Style}
            />
            <StatefulButtonSize
              selectedSize={selectedSize}
              onClick={this.selectSize}
              sizeName="8.5"
              style={{
                display: 'inline-block',
                margin: '3px',
              }}
              background={{
                backgroundImage: 'url(https://dummyimage.com/42x42/ffffff&text=++8.5+)',
                width: '42px',
                height: '42px',
                borderRadius: '3px',
                border: '1px solid black',
              }}
            />
            <StatefulButtonSize
              selectedSize={selectedSize}
              onClick={this.selectSize}
              sizeName="9"
              style={{
                display: 'inline-block',
                margin: '3px',
              }}
              background={{
                backgroundImage: 'url(https://dummyimage.com/42x42/ffffff&text=+++9++)',
                width: '42px',
                height: '42px',
                borderRadius: '3px',
                border: '1px solid black',
              }}
            />
            <StatefulButtonSize
              selectedSize={selectedSize}
              onClick={this.selectSize}
              sizeName="9.5"
              style={{
                display: 'inline-block',
                margin: '3px',
              }}
              background={{
                backgroundImage: 'url(https://dummyimage.com/42x42/ffffff&text=++9.5+)',
                width: '42px',
                height: '42px',
                borderRadius: '3px',
                border: '1px solid black',
              }}
            />
            <StatefulButtonSize
              selectedSize={selectedSize}
              onClick={this.selectSize}
              sizeName="10"
              style={{
                display: 'inline-block',
                margin: '3px',
              }}
              background={{
                backgroundImage: 'url(https://dummyimage.com/42x42/ffffff&text=++10++)',
                width: '42px',
                height: '42px',
                borderRadius: '3px',
                border: '1px solid black',
              }}
            />
            <StatefulButtonSize
              selectedSize={selectedSize}
              onClick={this.selectSize}
              sizeName="10.5"
              style={{
                display: 'inline-block',
                margin: '3px',
              }}
              background={{
                backgroundImage: 'url(https://dummyimage.com/42x42/ffffff&text=+10.5+)',
                width: '42px',
                height: '42px',
                borderRadius: '3px',
                border: '1px solid black',
              }}
            />
            <StatefulButtonSize
              selectedSize={selectedSize}
              onClick={this.selectSize}
              sizeName="11"
              style={{
                display: 'inline-block',
                margin: '3px',
              }}
              background={{
                backgroundImage: 'url(https://dummyimage.com/42x42/ffffff&text=++11++)',
                width: '42px',
                height: '42px',
                borderRadius: '3px',
                border: '1px solid black',
              }}
            />
          </div>
          <div
            id="lower_size_holder"
          >
            <StatefulButtonSize
              selectedSize={selectedSize}
              onClick={this.selectSize}
              sizeName="11.5"
              style={{
                display: 'inline-block',
                margin: '3px',
              }}
              background={{
                backgroundImage: 'url(https://dummyimage.com/42x42/ffffff&text=+11.5+)',
                width: '42px',
                height: '42px',
                borderRadius: '3px',
                border: '1px solid black',
              }}
            />
            <StatefulButtonSize
              selectedSize={selectedSize}
              onClick={this.selectSize}
              sizeName="12"
              style={{
                display: 'inline-block',
                margin: '3px',
              }}
              background={{
                backgroundImage: 'url(https://dummyimage.com/42x42/ffffff&text=++12++)',
                width: '42px',
                height: '42px',
                borderRadius: '3px',
                border: '1px solid black',
              }}
            />
            <StatefulButtonSize
              selectedSize={selectedSize}
              onClick={this.selectSize}
              sizeName="12.5"
              style={{
                display: 'inline-block',
                margin: '3px',
              }}
              background={{
                backgroundImage: 'url(https://dummyimage.com/42x42/ffffff&text=+12.5+)',
                width: '42px',
                height: '42px',
                borderRadius: '3px',
                border: '1px solid black',
              }}
            />
            <StatefulButtonSize
              selectedSize={selectedSize}
              onClick={this.selectSize}
              sizeName="13"
              style={{
                display: 'inline-block',
                margin: '3px',
              }}
              background={{
                backgroundImage: 'url(https://dummyimage.com/42x42/ffffff&text=++13++)',
                width: '42px',
                height: '42px',
                borderRadius: '3px',
                border: '1px solid black',
              }}
            />
            <StatefulButtonSize
              selectedSize={selectedSize}
              onClick={this.selectSize}
              sizeName="13.5"
              style={{
                display: 'inline-block',
                margin: '3px',
              }}
              background={{
                backgroundImage: 'url(https://dummyimage.com/42x42/ffffff&text=+13.5+)',
                width: '42px',
                height: '42px',
                borderRadius: '3px',
                border: '1px solid black',
              }}
            />
            <StatefulButtonSize
              selectedSize={selectedSize}
              onClick={this.selectSize}
              sizeName="14"
              style={{
                display: 'inline-block',
                margin: '3px',
              }}
              background={{
                backgroundImage: 'url(https://dummyimage.com/42x42/ffffff&text=++14++)',
                width: '42px',
                height: '42px',
                borderRadius: '3px',
                border: '1px solid black',
              }}
            />
          </div>
        </div>
        <a
          href="#size-chart"
          style={{
            fontSize: 'small',
          }}
        >
          See Size Chart
        </a>
        <div
          style={{
            marginTop: '10px',
          }}
        >
          <StatefulCartButton
            id="cart_button_1"
            onClick={this.handleSubmit}
            selectedColorway={selectedColorway}
            selectedSize={selectedSize}
            style={
              selectedSize === ''
                ? defaultCartStyle
                : {
                  display: 'inline-block',
                  padding: '3px',
                  height: '48px',
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  border: '2px solid black',
                  textAlign: 'center',
                  width: '95%',
                }
            }
          />
        </div>
      </div>
    );
  }
}

ProductOrder.propTypes = {
  parentState: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ProductOrder;
