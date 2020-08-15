import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';

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
    this.state = {};
  }

  render() {
    const starsArray = [];
    const {
      stars, name, price, reviews,
    } = this.props;
    for (let i = 0; i < stars; i += 1) {
      starsArray.push(
        <svg
          key={i}
          style={{
            stroke: '#646464',
            strokeWidth: '1px',
            strokeLinejoin: 'round',
            padding: '3px',
          }}
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23 23"
          width="13"
          height="13"
          paddingtop="2px"
        >
          <polygon
            fill="#212a2f"
            points="23,8.8 15,7.6 11.5,0 8,7.6 0,8.8 5.7,14.7 4.4,23 11.5,19 18.6,23 17.2,14.7"
          />
        </svg>,
      );
    }
    while (starsArray.length < 5) {
      starsArray.push(
        <svg
          key={starsArray.length}
          style={{
            stroke: '#646464',
            strokeWidth: '1px',
            strokeLinejoin: 'round',
            padding: '3px',
          }}
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23 23"
          width="13"
          height="13"
          paddingtop="2px"
        >
          <polygon
            fill="#ffffff"
            points="23,8.8 15,7.6 11.5,0 8,7.6 0,8.8 5.7,14.7 4.4,23 11.5,19 18.6,23 17.2,14.7"
          />
        </svg>,
      );
    }

    return (
      <div id="product_intro">
        <ProductName>
          {name}
        </ProductName>
        <PriceTag>
          {`$ ${price}`}
        </PriceTag>
        <ReviewHolder id="reviews">
          {starsArray}
          <NumberReviews href="#reviews">
            {reviews}
          </NumberReviews>
        </ReviewHolder>
      </div>
    );
  }
}

ProductIntro.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
};

export default ProductIntro;
