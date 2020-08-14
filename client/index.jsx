import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PropTypes from 'prop-types';
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
    // $.get('/api/5', (data) => {
    //   this.setState(data);
    // });
  }

  render() {
    $.get('/api/5', (data) => {
      this.setState(data);
    }, (data) => {
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
      } = data;
      return (
        <div className="app">
          <ProductIntro
            name={productName}
            price={productPrice}
            stars={productReviewStars}
            reviews={productReviewQuantity}
          />
          <ProductOrder
            parent_state={this.state}
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
    }).then((data) => {
      return data;
    });
  }
}

// App.propTypes = {
//   productName: PropTypes.string.isRequired,
//   productPrice: PropTypes.number.isRequired,
//   productReviewStars: PropTypes.number.isRequired,
//   productReviewQuantity: PropTypes.number.isRequired,
//   highlight1Text: PropTypes.string.isRequired,
//   highlight2Text: PropTypes.string.isRequired,
//   highlight3Text: PropTypes.string.isRequired,
//   coreFeatures: PropTypes.string.isRequired,
//   productDescription: PropTypes.string.isRequired,
//   shippingAndReturns: PropTypes.string.isRequired,
//   careGuide: PropTypes.string.isRequired,
// };

// bonking out the render for testing
// adding in export default for testing
// export default App;
ReactDOM.render(<App />, document.getElementById('app'));
