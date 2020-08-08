import React from 'react';

class ProductIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    let stars = [];

    for (var i = 0; i < this.props.stars; i++) {
      stars.push(<svg style={{
        stroke: "#646464",
        strokeWidth: "1px",
        strokeLinejoin: "round",
        padding: "3px"
        }} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="13" height="13">
      <polygon fill="#212a2f" points="23,8.8 15,7.6 11.5,0 8,7.6 0,8.8 5.7,14.7 4.4,23 11.5,19 18.6,23 17.2,14.7"></polygon></svg>);
    }
    while (stars.length < 5) {
      stars.push(<svg style={{
        stroke: "#646464",
        strokeWidth: "1px",
        strokeLinejoin: "round",
        padding: "3px"
        }} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="13" height="13">
      <polygon fill="#ffffff" points="23,8.8 15,7.6 11.5,0 8,7.6 0,8.8 5.7,14.7 4.4,23 11.5,19 18.6,23 17.2,14.7"></polygon></svg>)
    }
    return (
      <div>
        <div>
          {this.props.name}
        </div>
        <div>
          $ {this.props.price}
        </div>
        <div id="reviews" style={{display: "inline-block"}}>
          <div style={{display: "inline-block"}}>
            {stars}<a href="#reviews">{this.props.reviews}</a>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductIntro;