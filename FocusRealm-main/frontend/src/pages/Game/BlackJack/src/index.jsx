import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Casino from "./Casino";
import "/src/pages/Game/BlackJack/src/styles.module.scss";
// import React from "react";

// import App from "./App";
// import { Casino } from "@material-ui/icons";

const rootElement = document.getElementById("root");

import React from 'react'
import { style } from "d3";

function index() {
  return (
    <div className={style.myclass}><Casino /></div>
  )
}

export default index

// ReactDOM.render(
//   <StrictMode>
//     <Casino />
//   </StrictMode>,
//   rootElement
// );
