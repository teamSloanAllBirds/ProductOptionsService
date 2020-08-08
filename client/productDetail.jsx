import React from 'react';
import StatefulButton from './statefulButton.jsx';

class ProductDetail extends React.Component {
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
          {this.props.highlight1}
        </div>
        <div>
          {this.props.highlight2}
        </div>
        <div>
          {this.props.highlight3}
        </div>
          <StatefulButton>
          {this.props.core_features}
          </StatefulButton>
          <StatefulButton>
            {this.props.product_description}
          </StatefulButton>
          <StatefulButton>
            {this.props.shipping_returns}
          </StatefulButton>
          <StatefulButton>
            {this.props.care_guide}
          </StatefulButton>
      </div>
    )
  }
}

export default ProductDetail;