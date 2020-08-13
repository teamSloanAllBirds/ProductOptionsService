import React from 'react';
import styles from 'styled-components'

const ProductName = styles.div``;
const PriceTag = styles.div``;
const ReviewHolder = styles.div`
  display: inline-block;
`;
const NumberReviews = styles.a``;

class ProductIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    let stars = [];

    for (var i = 0; i < this.props.stars; i++) {
      stars.push(<svg key={i} style={{
        stroke: "#646464",
        strokeWidth: "1px",
        strokeLinejoin: "round",
        padding: "3px"
        }} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="13" height="13">
      <polygon fill="#212a2f" points="23,8.8 15,7.6 11.5,0 8,7.6 0,8.8 5.7,14.7 4.4,23 11.5,19 18.6,23 17.2,14.7"></polygon></svg>);
    }
    while (stars.length < 5) {
      stars.push(<svg key={stars.length} style={{
        stroke: "#646464",
        strokeWidth: "1px",
        strokeLinejoin: "round",
        padding: "3px"
        }} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="13" height="13">
      <polygon fill="#ffffff" points="23,8.8 15,7.6 11.5,0 8,7.6 0,8.8 5.7,14.7 4.4,23 11.5,19 18.6,23 17.2,14.7"></polygon></svg>);
    }
    return (
      <div id="product_intro">
        <ProductName>
          {this.props.name}
        </ProductName>
        <PriceTag>
          $ {this.props.price}
        </PriceTag>
        <ReviewHolder id="reviews">
            {stars}<NumberReviews href="#reviews">{this.props.reviews}</NumberReviews>
        </ReviewHolder>
      </div>
    )
  }
}

export default ProductIntro;