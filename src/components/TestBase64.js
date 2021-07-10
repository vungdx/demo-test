import React, { Component } from "react";

class TestBase64 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
    };
  }
  componentDidMount() {
    this.getBase64FromUrl(`${window.location.origin}/assets/images/type52.png`);
  }

  getBase64FromUrl = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();

    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        console.log("THIS IS BASE64 DATA", base64data);
        this.setState({
          img: base64data,
        });
        console.log("this.state.img", this.state.img);
        resolve(base64data);
      };
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <img src={`${this.state.img}`} height="200px" alt="" />
      </div>
    );
  }
}

export default TestBase64;
