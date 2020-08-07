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
        <div>
          <StatefulButton>
          {this.props.core_features}
          </StatefulButton>
        </div>
        <div>
          <StatefulButton>
            {this.props.product_description}
          </StatefulButton>
        </div>
        <div>
          <StatefulButton>
            {this.props.shipping_returns}
          </StatefulButton>
        </div>
        <div>
          <StatefulButton>
            {this.props.care_guide}
          </StatefulButton>
        </div>
      </div>
    )
  }
}

export default ProductDetail;