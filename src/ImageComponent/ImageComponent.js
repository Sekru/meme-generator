import React from "react";
import "./ImageComponent.css";

import TextFieldsComponent from "./../TextFieldsComponent/TextFieldsComponent";
import SizeTextComponent from "./../SizeTextComponent/SizeTextComponent";
import ColorTextComponent from "./../ColorTextComponent/ColorTextComponent";
import SaveButtonComponent from "./../SaveButtonComponent/SaveButtonComponent";
import ResetButtonComponent from "./../ResetButtonComponent/ResetButtonComponent";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

class ImageComponent extends React.Component {
  initState = {
    altText: true,
    file: '',
    sizeTop: 25,
    sizeBottom: 25,
    colorTop: '#ffffff',
    colorBottom: '#ffffff',
  };
  constructor(props) {
    super(props);

    this.handleTopText = this.handleTopText.bind(this);
    this.handleBottomText = this.handleBottomText.bind(this);

    this.handleSizeTop = this.handleSizeTop.bind(this);
    this.handleSizeBottom = this.handleSizeBottom.bind(this);

    this.handleColorTop = this.handleColorTop.bind(this);
    this.handleColorBottom = this.handleColorBottom.bind(this);

    this.handleSaveButton = this.handleSaveButton.bind(this);
    this.handleResetButton = this.handleResetButton.bind(this);

    this.state = this.initState;
  }

  showImage = (event) => {
    this.setState({
      altText: false,
      file: URL.createObjectURL(event.target.files[0]),
    });
  };

  handleTopText = (event) => {
    this.setState({
      topText: event.target.value,
    });
  };

  handleColorTop = (event) => {
    this.setState({
      colorTop: event.target.value,
    });
  };

  handleColorBottom = (event) => {
    this.setState({
      colorBottom: event.target.value,
    });
  };

  handleBottomText = (event) => {
    this.setState({
      bottomText: event.target.value,
    });
  };

  handleSizeTop = (event) => {
    this.setState({
      sizeTop: event.target.value,
    });
  };

  handleSizeBottom = (event) => {
    this.setState({
      sizeBottom: event.target.value,
    });
  };

  handleResetButton = () => {
    this.setState(this.initState);
  };

  handleSaveButton = () => {
    if (this.state.file != null) {
      html2canvas(document.querySelector(".meme-container"), {
        logging: true,
        letterRendering: 1,
        allowTaint: false,
        useCORS: true,
      }).then((canvas) => {
        saveAs(canvas.toDataURL(), "funny_mem.png");
      });
    }
  };

  render() {
    return (
      <>
        <div className="border">
          {!this.state.file ? (
            <div
              className="image-container"
            >
              <p>Dodaj Obrazek</p>
              <input type="file" id="memUpload" onChange={this.showImage} />
            </div>
          ) : (
            <div className="meme-container">
              <span
                style={{
                  fontSize: this.state.sizeTop + "px",
                  color: this.state.colorTop,
                }}
                id="top-meme-text"
              >
                {this.state.topText}
              </span>
              <img alt="Mem" src={this.state.file} />
              <span
                style={{
                  fontSize: this.state.sizeBottom + "px",
                  color: this.state.colorBottom,
                }}
                id="bottom-meme-text"
              >
                {this.state.bottomText}
              </span>
            </div>
          )}
          <div className="fields">
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
            <div>
              <SaveButtonComponent
                handleSaveButton={this.handleSaveButton}
              ></SaveButtonComponent>
              <ResetButtonComponent
                handleResetButton={this.handleResetButton}>
              </ResetButtonComponent>
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default ImageComponent;
