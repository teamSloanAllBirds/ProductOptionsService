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
        <div style={{display: "inline-block", fontSize: "small", textAlign: "center", marginLeft: "55px"}}>
          {this.props.name} HIGHLIGHTS
        </div>
        <div id="highlight-block">
          <div style={{display: "inline-block", width: "30%", verticalAlign: "top", fontSize: "x-small", padding: "5px", margin: "auto"}}>
            <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/f_auto,q_auto/https://images.ctfassets.net/9uo1qvvet3xa/5RRq6D7d2XTZqvdmMIZQao/8499977205e7511610408842c3e2e925/4pdp-attributes-dasher-sprinter.png" height="44px" width="44px" marginleft="50%" marginright="50%"></img><br></br>
            {this.props.highlight1}
          </div>
          <div style={{display: "inline-block", width: "30%", verticalAlign: "top", fontSize: "x-small", padding: "5px", margin: "auto"}}>
            <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/f_auto,q_auto/https://images.ctfassets.net/9uo1qvvet3xa/7wss7uKwXrUO90ynOGYr4g/01a0e139e9605b20c72fd5d11029c8ec/3pdp-attributes-dasher-sprinter.png" height="44px" width="44px" marginleft="auto" marginright="auto"></img><br></br>
            {this.props.highlight2}
          </div>
          <div style={{display: "inline-block", width: "30%", verticalAlign: "top", fontSize: "x-small", padding: "5px", margin: "auto"}}>
            <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/f_auto,q_auto/https://images.ctfassets.net/9uo1qvvet3xa/6R7XNn35GqLdQ5OLgAalOu/1a762104f13ce7cb027333ae05a78dac/5pdp-attributes-dasher-sprinter.png" height="44px" width="44px" marginleft="auto" marginright="auto"></img><br></br>
            {this.props.highlight3}
          </div>
        </div>
        <div id="description-block">
          <StatefulButton text={this.props.core_features}
          style={{display: "inline-block", padding: "3px", fontSize: "small"}}/>
          <StatefulButton text={this.props.product_description}
          style={{display: "inline-block", padding: "3px", fontSize: "small"}}/>
          <StatefulButton text={this.props.shipping_returns}
          style={{display: "inline-block", padding: "3px", fontSize: "small"}}/>
          <StatefulButton text={this.props.care_guide}
          style={{display: "inline-block", padding: "3px", fontSize: "small"}}/>
        </div>
      </div>
    );
  }
}

export default ProductDetail;