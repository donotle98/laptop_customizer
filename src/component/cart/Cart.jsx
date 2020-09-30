import React, { Component } from "react";
import SummaryItem from "./SummaryItem";
import Total from "./Total";

class Cart extends Component {
  render() {
    const summary = Object.keys(this.props.selectedStore).map(
      (feature, idx) => {
        return this.createSummaryItem(feature, idx);
      }
    );
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <Total selectedStore={this.props.selectedStore} />
      </section>
    );
  }
  createSummaryItem(feature, idx) {
    return (
      <SummaryItem
        key={idx}
        idx={idx}
        feature={feature}
        selectedStore={this.props.selectedStore}
      />
    );
  }
}

export default Cart;
