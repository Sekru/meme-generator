import React from "react";
import "./SaveButtonComponent.css";

class SaveButtonComponent extends React.Component {
  render() {
    return (
      <div className="fields">
        <button onClick={this.props.handleSaveButton}>Zapisz</button>
      </div>
    );
  }
}

export default SaveButtonComponent;
