/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";

import "./style/DemoTooltip.css";

class DemoTooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  UNSAFE_componentWillReceiveProps() {
    var tooltip = document.querySelectorAll(".coupontooltip");

    document.addEventListener(
      "mousemove",
      (e) => {
        for (var i = tooltip.length; i--; ) {
          tooltip[i].style.left = e.pageX + "px";
          tooltip[i].style.top = e.pageY + "px";
        }
      },
      false
    );
  }

  render() {
    const data = [
      {
        name: "Mark",
        address: "Hanoi",
      },
      {
        name: "Beckham",
        address: "England",
      },
      {
        name: "Ronaldo",
        address: "USa",
      },
    ];
    return (
      <div className="container">
        <table className="table table-hover table-bordered" id="MyTable">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr className="CellWithComment" key={idx}>
                <td className="CellComment">Here is a comment {idx + 1}</td>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>
                  <button className="btn btn-warning mx-2">Edit</button>
                  <button className="btn btn-danger mx-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DemoTooltip;
