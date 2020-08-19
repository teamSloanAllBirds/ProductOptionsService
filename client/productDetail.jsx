import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StatefulButton from './statefulButton.jsx';

const StyledHr = styled.hr`
  color: '#cfcfcf';
  width: '95%';
`;

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDescription: 'CORE FEATURES',
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const { selectedDescription } = this.state;
    if (e.target.attributes[0].nodeValue === selectedDescription) {
      this.setState({
        selectedDescription: '',
      });
    }
    this.setState({
      selectedDescription: e.target.attributes[0].nodeValue,
    });
  }

  render() {
    const {
      name,
      highlight1,
      highlight2,
      highlight3,
      coreFeatures,
      productDescription,
      shippingReturns,
      careGuide,
    } = this.props;
    const { selectedDescription } = this.state;
    return (
      <div>
        <div
          style={{
            display: 'inline-block',
            fontSize: 'small',
            textAlign: 'center',
            marginleft: 'auto',
            marginright: 'auto',
            width: '95%',
            marginBottom: '20px',
          }}
        >
          {`${name} HIGHLIGHTS`}
        </div>
        <div
          id="highlight-block"
        >
          <div style={{
            display: 'inline-block',
            width: '30%',
            verticalAlign: 'top',
            fontSize: 'x-small',
            padding: '5px',
            margin: 'auto',
          }}>
            <img
              id="highlight1picture"
              src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/f_auto,q_auto/https://images.ctfassets.net/9uo1qvvet3xa/5RRq6D7d2XTZqvdmMIZQao/8499977205e7511610408842c3e2e925/4pdp-attributes-dasher-sprinter.png"
              height="44px"
              width="44px"
              style={{
                marginLeft: '25%',
                marginRight: '25%',
              }}
              alt="a broccoli with big arms"
            />
            <br />
            {highlight1}
          </div>
          <div style={{
            display: 'inline-block',
            width: '30%',
            verticalAlign: 'top',
            fontSize: 'x-small',
            padding: '5px',
            margin: 'auto',
          }}>
            <img
              id="highlight2picture"
              src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/f_auto,q_auto/https://images.ctfassets.net/9uo1qvvet3xa/7wss7uKwXrUO90ynOGYr4g/01a0e139e9605b20c72fd5d11029c8ec/3pdp-attributes-dasher-sprinter.png"
              height="44px"
              width="44px"
              style={{
                marginLeft: '25%',
                marginRight: '25%',
              }}
              alt="a shoe vibrating"
            />
            <br />
            {highlight2}
          </div>
          <div style={{
            display: 'inline-block',
            width: '30%',
            verticalAlign: 'top',
            fontSize: 'x-small',
            padding: '5px',
            margin: 'auto',
          }}>
            <img
              id="highlight3picture"
              src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/f_auto,q_auto/https://images.ctfassets.net/9uo1qvvet3xa/6R7XNn35GqLdQ5OLgAalOu/1a762104f13ce7cb027333ae05a78dac/5pdp-attributes-dasher-sprinter.png"
              height="44px"
              width="44px"
              style={{
                marginLeft: '25%',
                marginRight: '25%',
              }}
              alt="a shoe getting struck by lightning"
            />
            <br />
            {highlight3}
          </div>
        </div>
        <div
          id="description-block"
          style={{
            marginTop: '20px',
          }}
        >
          <StyledHr />
          <StatefulButton
            descriptionName="CORE FEATURES"
            onClick={this.onClick}
            text={coreFeatures}
            style={{
              display: 'inline',
              padding: '3px',
              fontSize: 'small',
            }}
            selectedDescription={selectedDescription}
          />
          <br />
          <StyledHr />
          <StatefulButton
            descriptionName="DESCRIPTION"
            onClick={this.onClick}
            text={productDescription}
            style={{
              display: 'inline',
              padding: '3px',
              fontSize: 'small',
            }}
            selectedDescription={selectedDescription}
          />
          <br />
          <StyledHr />
          <StatefulButton
            descriptionName="SHIPPING & RETURNS"
            onClick={this.onClick}
            text={shippingReturns}
            style={{
              display: 'inline',
              padding: '3px',
              fontSize: 'small',
            }}
            selectedDescription={selectedDescription}
          />
          <br />
          <StyledHr />
          <StatefulButton
            descriptionName="CARE GUIDE"
            onClick={this.onClick}
            text={careGuide}
            style={{
              display: 'inline',
              padding: '3px',
              fontSize: 'small',
            }}
            selectedDescription={selectedDescription}
          />
          <StyledHr />
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  name: PropTypes.string.isRequired,
  highlight1: PropTypes.string.isRequired,
  highlight2: PropTypes.string.isRequired,
  highlight3: PropTypes.string.isRequired,
  coreFeatures: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  shippingReturns: PropTypes.string.isRequired,
  careGuide: PropTypes.string.isRequired,
};

export default ProductDetail;
