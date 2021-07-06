/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component, Fragment } from "react";

import "./style/DemoPrint.css";

class DemoPrint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideButton: false,
    };
  }

  printMulPages = () => {
    this.printElement(document.getElementById("printThis"));
    this.printElementToo(document.getElementById("printThisToo"));
    // this.printElement(document.getElementById("printThisToo"));
    window.print();
  };
  // printElement3 = (el, append, delimiter) => {
  //   console.log("3");
  //   const domClone1 = el.cloneNode(true);
  //   let printSection = document.getElementById("printSection");
  //   if (!printSection) {
  //     printSection = document.createElement("div");
  //     printSection.id = "printSection";
  //     printSection.style.pageBreakAfter = "always";
  //     printSection.style.pageBreakBefore = "always";
  //     document.body.appendChild(printSection);
  //   }
  //   // console.log("printSection được tạo ra", printSection);
  //   printSection.appendChild(domClone1);
  // };

  // printElement2 = (el, append, delimiter) => {
  //   const domClone1 = el.cloneNode(true);
  //   console.log("domClone2", domClone1);
  //   let printSection = document.getElementById("printSection2");
  //   if (!printSection) {
  //     printSection = document.createElement("div");
  //     printSection.id = "printSection2";
  //     printSection.style.pageBreakBefore = "always";
  //     document.body.appendChild(printSection);
  //   }
  //   // console.log("printSection được tạo ra", printSection);
  //   printSection.appendChild(domClone1);
  // };

  printElement = (el1, append, delimiter) => {
    const domClone1 = el1.cloneNode(true);
    let printSection = document.getElementById("printSection");
    if (!printSection) {
      printSection = document.createElement("div");
      printSection.id = "printSection";

      document.body.appendChild(printSection);
    } else {
      printSection.innerHTML = "";
    }
    printSection.appendChild(domClone1);
  };
  printElementToo = (el2, append, delimiter) => {
    const domClone2 = el2.cloneNode(true);
    let printSection = document.getElementById("printSection");
    printSection.appendChild(domClone2);
    let node1 = document.querySelector("#printSection > #printThisToo");
    node1.className = "newpage";
    node1.style.pageBreakBefore = "always";
  };

  render() {
    return (
      // <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      //   <div className="modal-dialog">
      //     <div className="modal-content">
      //       <div id="printThis" className="modal-body">
      //         <ul>
      //           <li>ListItem1</li>
      //           <li>ListItem1</li>
      //           <li>ListItem1</li>
      //         </ul>
      //       </div>
      //       <div id="printThis" className="newpage">
      //         Break
      //       </div>
      //       <div id="printThis" className="modal-body">
      //         <ul>
      //           <li>ListItem2</li>
      //           <li>ListItem2</li>
      //           <li>ListItem2</li>
      //         </ul>
      //       </div>
      //       <div className="modal-footer">
      //         <button type="button" id="Print" className="btn btn-primary">
      //           Print
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      // </div>

      <div className="wrapper-print">
        <main className="main-print">
          <button className="btn btn-primary" onClick={() => this.printMulPages()}>
            Print
          </button>

          <h1 id="printThis">Đây là nội dung trang 1</h1>
          <h1 id="printThisToo">Đây là nội dung trang 2</h1>
        </main>
      </div>
    );
  }
}

export default DemoPrint;
