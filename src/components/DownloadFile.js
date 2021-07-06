import React from "react";
import axios from "axios";

class DownloadFile extends React.Component {
  constructor(props) {
    super(props);
  }

  downloadFile = () => {
    axios
      .get(`http://www.elml.org/website/en/download/gitta_databases.pdf`, {
        responseType: "blob",
        headers: {
          "access-control-allow-origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "file.pdf");
        document.body.appendChild(link);
        link.click();
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Bản demo test download image from server</h1>
        <button onClick={this.downloadFile}>Download image</button>
      </div>
    );
  }
}

export default DownloadFile;
