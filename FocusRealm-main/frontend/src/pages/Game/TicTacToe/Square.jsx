import { size } from "lodash";
import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "1px solid",
        height: "70px",
        width: "70px", // Updated to have the same value as height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "aqua",
      }}
      className="square"
    >
      <h5> {props.value} </h5>
    </div>
  );
};

export default Square;
