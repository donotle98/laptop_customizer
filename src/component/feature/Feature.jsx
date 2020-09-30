import React, { Component } from "react";
import FeatureOption from "./FeatureOption";
import slugify from "slugify";

class Feature extends Component {
  render() {
    const { feature, idx } = this.props;
    const featureHash = feature + "-" + idx;
    const options = this.props.features[feature].map((item) => {
      const itemHash = slugify(JSON.stringify(item));

      return this.createOptions(itemHash, feature, item);
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }

  createOptions(itemHash, feature, item) {
    return (
      <FeatureOption
        key={itemHash}
        itemHash={itemHash}
        feature={feature}
        item={item}
        selectedStore={this.props.selectedStore}
        updateFeature={this.props.updateFeature}
      />
    );
  }
}

export default Feature;
