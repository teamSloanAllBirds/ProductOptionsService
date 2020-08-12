import React from 'react';
import styles from 'styled-components'

const ProductName = styles.h1`
font-weight: 900;
height: 30px;
`;
const PriceTag = styles.div`
padding-bottom: 10px;
`;
const ReviewHolder = styles.div`
  display: inline-block;
  padding-bottom: 13px;
`;
const NumberReviews = styles.a`
  font-size: 95%;
  padding-left: 3px;
  padding-top: 2px;
  vertical-align: top;
`;

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
        }} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="13" height="13" paddingtop="2px">
      <polygon fill="#212a2f" points="23,8.8 15,7.6 11.5,0 8,7.6 0,8.8 5.7,14.7 4.4,23 11.5,19 18.6,23 17.2,14.7"></polygon></svg>);
    }
    while (stars.length < 5) {
      stars.push(<svg key={stars.length} style={{
        stroke: "#646464",
        strokeWidth: "1px",
        strokeLinejoin: "round",
        padding: "3px"
        }} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="13" height="13" paddingtop="2px">
      <polygon fill="#ffffff" points="23,8.8 15,7.6 11.5,0 8,7.6 0,8.8 5.7,14.7 4.4,23 11.5,19 18.6,23 17.2,14.7"></polygon></svg>);
    }
    return (
      <div>
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