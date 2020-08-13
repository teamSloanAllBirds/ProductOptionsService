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
    $.get('/api/5', (data) => {
      this.setState(data);
    }).then(() => {
      return;
    })
  }

  render() {
    return (
      <div className="app">
        <ProductIntro name={this.state.productName}
        price={this.state.productPrice}
        stars={this.state.productReviewStars}
        reviews={this.state.productReviewQuantity}/>
        <ProductOrder parent_state={this.state}/>
        <span style={{display: "inline-block", fontSize: "small", marginTop: "10px", marginBottom: "10px", textAlign: "center", width: "95%"}}>Free shipping & 30-day returns, no questions asked</span>
        <ProductDetail name={this.state.productName}
        highlight1={this.state.highlight1Text}
        highlight2={this.state.highlight2Text}
        highlight3={this.state.highlight3Text}
        core_features={this.state.coreFeatures}
        product_description={this.state.productDescription}
        shipping_returns={this.state.shippingAndReturns}
        care_guide={this.state.careGuide}/>
      </div>
    )
  }
}
// bonking out the render for testing
// adding in export default for testing
//export default App;
ReactDOM.render(<App />, document.getElementById("app"));

