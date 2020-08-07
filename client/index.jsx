import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ProductIntro from './productIntro.jsx';
import ProductOrder from './productOrder.jsx';
import ProductDetail from './productDetail.jsx';
import styles from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    $.get('/api/1', (data) => {
      this.setState(data);
    })
  }

  render() {
    return (
      <div>
        <ProductIntro name={this.state.productName}
        price={this.state.productPrice}
        stars={this.state.productReviewStars}
        reviews={this.state.productReviewQuantity}/>
        <ProductOrder parent_state={this.state}/>
        <ProductDetail name={this.state.productName}
        highlight1={this.state.productHighlight1}
        highlight2={this.state.productHighlight2}
        hightlight3={this.state.productHighlight3}
        core_features={this.state.coreFeatures}
        product_description={this.state.productDescription}
        shipping_returns={this.state.shippingAndReturns}
        care_guide={this.state.careGuide}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
