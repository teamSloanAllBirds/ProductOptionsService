import React from 'react';

class ProductIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <div>
          {this.props.name}
        </div>
        <div>
          {this.props.price}
        </div>
        <div>
          {this.props.stars}
        </div>
        <div>
          {this.props.reviews}
        </div>
      </div>
    )
  }
}

export default ProductIntro;