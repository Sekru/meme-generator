import React from "react";
import "./SizeTextComponent.css";

class SizeTextComponent extends React.Component {
  render() {
    return (
      <div className="field">
        <input
          type="number"
          onChange={this.props.handleSizeTop}
          value={this.props.sizeTop}
          id="size-top"
          placeholder="25px"
          min="0"
        />
        <input
          type="number"
          onChange={this.props.handleSizeBottom}
          value={this.props.sizeBottom}
          id="size-bottom"
          placeholder="25px"
          min="0"
        />
      </div>
    );
  }
}

export default SizeTextComponent;
