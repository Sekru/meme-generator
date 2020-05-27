import React from "react";
import "./ResetButtonComponent.css";

class ResetButtonComponent extends React.Component {
  render() {
    return (
      <div className="fields">
        <button onClick={this.props.handleResetButton}>Reset</button>
      </div>
    );
  }
}

export default ResetButtonComponent;
