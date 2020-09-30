import React, { Component } from "react";
import slugify from "slugify";
import USCurrencyFormat from "../USCurrencyFormat";

class FeatureOption extends Component {
  render() {
    const { itemHash, feature, item } = this.props;

    return (
      <div key={this.props.itemHash} className="feature__item">
        <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          name={slugify(feature)}
          checked={item.name === this.props.selectedStore[feature].name}
          onChange={() => this.props.updateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  }
}

export default FeatureOption;
