import React from "react";
import "./App.css";

class ImageComponent extends React.Component {
  state = {
    altText: true,
    file: null,
  };

  showImage = (event) => {
    this.setState({
      altText: false,
      file: URL.createObjectURL(event.target.files[0]),
    });
  };

  render() {
    return (
      <>
        <div className="border">
          {!this.state.file ? (
            <>
              <p>Dodaj Obrazek</p>
              <input type="file" id="idImg" onChange={this.showImage} />
            </>
          ) : (
            <img src={this.state.file} />
          )}
        </div>
      </>
    );
  }
}

export { ImageComponent };
