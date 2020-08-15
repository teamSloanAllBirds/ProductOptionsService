import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import PropTypes from 'prop-types';
// import styles from 'styled-components';

import ProductIntro from './productIntro.jsx';
import ProductOrder from './productOrder.jsx';
import ProductDetail from './productDetail.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    $.get('/api/5', (data) => {
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
      <div className="app">
        <ProductIntro
          name={productName}
          price={productPrice}
          stars={productReviewStars}
          reviews={productReviewQuantity}
        />
        <ProductOrder
          parentState={this.state}
        />
        <span
          style={{
            display: 'inline-block',
            fontSize: 'small',
            marginTop: '10px',
            marginBottom: '10px',
            textAlign: 'center',
            width: '95%',
          }}
        >
          Free shipping & 30-day returns, no questions asked
        </span>
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
// export default App;
ReactDOM.render(<App />, document.getElementById('app'));
