import React from 'react';
import StatefulButton from './statefulButton.jsx';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDescription: "CORE FEATURES"
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    if (e.target.attributes[0].nodeValue === this.state.selectedDescription) {
      this.setState({
        selectedDescription: ''
      })
    }
    this.setState({
      selectedDescription: e.target.attributes[0].nodeValue
    })
  }
  render() {
    return (
      <div>
        <div style={{display: "inline-block", fontSize: "small", textAlign: "center", marginleft: "auto", marginright: "auto", width: "95%", marginBottom: "20px"}}>
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
        <div id="description-block" style={{marginTop: "20px"}}>
          <hr style={{color: "#cfcfcf", width: "95%"}}></hr>
          <StatefulButton
          descriptionName="CORE FEATURES"
          onClick={this.onClick}
          text={this.props.coreFeatures}
          style={{display: "inline", padding: "3px", fontSize: "small"}}
          selectedDescription={this.state.selectedDescription}/><br></br>
          <hr style={{color: "#cfcfcf", width: "95%"}}></hr>
          <StatefulButton
          descriptionName="DESCRIPTION"
          onClick={this.onClick}
          text={this.props.productDescription}
          style={{display: "inline", padding: "3px", fontSize: "small",}}
          selectedDescription={this.state.selectedDescription}/><br></br>
          <hr style={{color: "#cfcfcf", width: "95%"}}></hr>
          <StatefulButton
          descriptionName="SHIPPING & RETURNS"
          onClick={this.onClick}
          text={this.props.shippingReturns}
          style={{display: "inline", padding: "3px", fontSize: "small"}}
          selectedDescription={this.state.selectedDescription}/><br></br>
          <hr style={{color: "#cfcfcf", width: "95%"}}></hr>
          <StatefulButton
          descriptionName="CARE GUIDE"
          onClick={this.onClick}
          text={this.props.careGuide}
          style={{display: "inline", padding: "3px", fontSize: "small"}}
          selectedDescription={this.state.selectedDescription}/>
          <hr style={{color: "#cfcfcf", width: "95%"}}></hr>
        </div>
      </div>
    );
  }
}

export default ProductDetail;