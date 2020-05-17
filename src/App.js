import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <ImageComponent></ImageComponent>
    </div>
  );
};

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
        <div className="Border">
          {this.state.altText ? (
            <>
              <p>Dodaj Obrazek</p>
              <input type="file" onChange={this.showImage} />
            </>
          ) : (
            <img src={this.state.file} />
          )}
        </div>
      </>
    );
  }
}

export default App;
