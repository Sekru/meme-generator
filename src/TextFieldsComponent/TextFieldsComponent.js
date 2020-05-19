import React from "react";
import "./TextFieldsComponent.css";

class TextFieldsComponent extends React.Component {
  render() {
    return (
      <div className="fields">
        <input 
          onChange={this.props.handleTopText}
          id="top-text" placeholder="Wpisz górny tekst..."/>
        <input 
          onChange={this.props.handleBottomText}
          id="bottom-text" placeholder="Wpisz dolny tekst..."/>
      </div>
    );
  }
}

export default TextFieldsComponent;
