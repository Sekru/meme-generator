import React from "react";
import "./ImageComponent.css";

import TextFieldsComponent from "./../TextFieldsComponent/TextFieldsComponent"

class ImageComponent extends React.Component {
  constructor(props) {
    super(props)

    this.handleTopText = this.handleTopText.bind(this);
    this.handleBottomText = this.handleBottomText.bind(this);
  }

  state = {
    altText: true,
    file: null
  };

  showImage = (event) => {
    this.setState({
      altText: false,
      file: URL.createObjectURL(event.target.files[0]),
    });
  };

  handleTopText = event => {
    this.setState({
      topText: event.target.value
    })
  }

  handleBottomText = event => {
    this.setState({
      bottomText: event.target.value
    })
  }

  render() {
    return (
      <>
        <div className="border">
          {!this.state.file ? (
            <div className="image-container">
              <p>Dodaj Obrazek</p>
              <input type="file" id="memUpload" onChange={this.showImage} />
            </div>
          ) : (
            <div className="meme-container">
              <span id="top-meme-text">{this.state.topText}</span>
              <img alt="Mem" src={this.state.file} />
              <span id="bottom-meme-text">{this.state.bottomText}</span>
            </div>
          )}
          <TextFieldsComponent handleTopText={this.handleTopText} handleBottomText={this.handleBottomText}/>
        </div>
      </>
    );
  }
}

export default ImageComponent;
