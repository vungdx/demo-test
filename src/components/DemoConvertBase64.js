/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import "./style/DemoConvertBase64.css";

class DemoConvertBase64 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var img = document.getElementById("img");

    img.crossOrigin = "Anonymous";
    img.onload = () => {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      canvas.height = this.naturalHeight;
      canvas.width = this.naturalWidth;
      ctx.drawImage(this, 0, 0);
      var data = canvas.toDataURL("image/jpeg");
      document.getElementById("result").value = data;
    };
  }

  render() {
    return (
      <div>
        <h1>Convert Base64</h1>

        <img id="img" style={{ backgroundImage: `url(${`${window.location.origin}/assets/images/type52.png`})` }} alt="" />
      </div>
    );
  }
}

export default DemoConvertBase64;
