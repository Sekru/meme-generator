import React from "react";
import "./SizeTextComponent.css";

class SizeTextComponent extends React.Component {
  render() {
    return (
      <div className="field">
        <input
          type="number"
          onChange={this.props.handleSizeTop}
          id="sizetop"
          placeholder="25px"
        />
        <input
          type="number"
          onChange={this.props.handleSizeBottom}
          id="sizetop"
          placeholder="25px"
        />
      </div>
    );
  }
}

export default SizeTextComponent;
