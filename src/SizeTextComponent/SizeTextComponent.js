import React from "react";
import "./SizeTextComponent.css";

class SizeTextComponent extends React.Component {
  render() {
    return (
      <div className="field">
        <input
          type="number"
          onChange={this.props.handleSizeTop}
          id="size-top"
          placeholder="25px"
          min="0"
        />
        <input
          type="number"
          onChange={this.props.handleSizeBottom}
          id="size-top"
          placeholder="25px"
          min="0"
        />
      </div>
    );
  }
}

export default SizeTextComponent;
