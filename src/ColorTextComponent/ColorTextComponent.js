import React from "react";
import "./ColorTextComponent.css";

class ColorTextComponent extends React.Component {
  render() {
    return (
      <div className="field">
        <input
          type="color"
          onChange={this.props.handleColorTop}
          value={this.props.colorTop}
          id="color-top"
        />
        <input
          type="color"
          onChange={this.props.handleColorBottom}
          value={this.props.colorBottom}
          id="color-bottom"
        />
      </div>
    );
  }
}

export default ColorTextComponent;
