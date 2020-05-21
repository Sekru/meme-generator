import React from "react";
import "./ImageComponent.css";

import TextFieldsComponent from "./../TextFieldsComponent/TextFieldsComponent";
import SizeTextComponent from "./../SizeTextComponent/SizeTextComponent";
import ColorTextComponent from "./../ColorTextComponent/ColorTextComponent";

class ImageComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleTopText = this.handleTopText.bind(this);
    this.handleBottomText = this.handleBottomText.bind(this);

    this.handleSizeTop = this.handleSizeTop.bind(this);
    this.handleSizeBottom = this.handleSizeBottom.bind(this);

    this.handleColorTop = this.handleColorTop.bind(this);
    this.handleColorBottom = this.handleColorBottom.bind(this);
  }

  state = {
    altText: true,
    file: null,
    sizeTop: 25,
    sizeBottom: 25,
    colorTop: 'rgb(0, 0, 0)',
    colorBottom: 'rgb(0, 0, 0)'
  };

  showImage = event => {
    this.setState({
      altText: false,
      file: URL.createObjectURL(event.target.files[0]),
    });
  };

  handleTopText = event => {
    this.setState({
      topText: event.target.value,
    });
  };

  handleColorTop = event => {
    this.setState({
      colorTop: event.target.value,
    });
  };

  handleColorBottom = event => {
    this.setState({
      colorBottom: event.target.value,
    });
  };

  handleBottomText = event => {
    this.setState({
      bottomText: event.target.value,
    });
  };

  handleSizeTop = event => {
    this.setState({
      sizeTop: event.target.value,
    });
  };

  handleSizeBottom = event => {
    this.setState({
      sizeBottom: event.target.value,
    });
  };

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
              <span
                style={{ fontSize: this.state.sizeTop + "px", color: this.state.colorTop }}
                id="top-meme-text"
              >
                {this.state.topText}
              </span>
              <img alt="Mem" src={this.state.file} />
              <span
                style={{ fontSize: this.state.sizeBottom + "px", color: this.state.colorBottom }}
                id="bottom-meme-text"
              >
                {this.state.bottomText}
              </span>
            </div>
          )}
          <TextFieldsComponent
            handleTopText={this.handleTopText}
            handleBottomText={this.handleBottomText}
          />
          <SizeTextComponent
            handleSizeTop={this.handleSizeTop}
            handleSizeBottom={this.handleSizeBottom}
            sizeTop={this.state.sizeTop}
            sizeBottom={this.state.sizeBottom}
          />
          <ColorTextComponent
            handleColorTop={this.handleColorTop}
            handleColorBottom={this.handleColorBottom}
            colorTop={this.state.colorTop}
            colorBottom={this.state.colorBottom}
          />
        </div>
      </>
    );
  }
}

export default ImageComponent;
