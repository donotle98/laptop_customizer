import React, { Component } from "react";

import Feature from "./Feature";

class FeaturesForm extends Component {
  state = {};
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      return this.createFeature(feature, idx);
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }

  createFeature(feature, idx) {
    return (
      <Feature
        key={idx}
        idx={idx}
        feature={feature}
        features={this.props.features}
        selectedStore={this.props.selectedStore}
        updateFeature={this.props.updateFeature}
      />
    );
  }
}

export default FeaturesForm;
