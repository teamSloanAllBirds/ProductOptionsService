import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';

import ProductIntro from './productIntro.jsx';
import ProductOrder from './productOrder.jsx';
import ProductDetail from './productDetail.jsx';

const StyledSpan = styled.span`
  display: 'inline-block';
  fontSize: 'small';
  marginTop: '10px';
  marginBottom: '10px';
  textAlign: 'center';
  width: '95%';
`;

class OptionsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const pathname = (window.location.pathname !== '/') ? window.location.pathname : '/1';
    $.get(`/api/productoptions${pathname}`, (data) => {
      this.setState(data);
    });
  }

  render() {
    const {
      productName,
      productPrice,
      productReviewStars,
      productReviewQuantity,
      highlight1Text,
      highlight2Text,
      highlight3Text,
      coreFeatures,
      productDescription,
      shippingAndReturns,
      careGuide,
    } = this.state;
    return (
      <div className="productoptions">
        <ProductIntro
          name={productName}
          price={productPrice}
          stars={productReviewStars}
          reviews={productReviewQuantity}
        />
        <ProductOrder
          parentState={this.state}
        />
        <StyledSpan>
          Free shipping & 30-day returns, no questions asked
        </StyledSpan>
        <ProductDetail
          name={productName}
          highlight1={highlight1Text}
          highlight2={highlight2Text}
          highlight3={highlight3Text}
          coreFeatures={coreFeatures}
          productDescription={productDescription}
          shippingReturns={shippingAndReturns}
          careGuide={careGuide}
        />
      </div>
    );
  }
}

// bonking out the render for testing
// adding in export default for testing
export default OptionsApp;
