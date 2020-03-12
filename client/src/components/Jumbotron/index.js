import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{width:"100vw",height: 200, clear: "both", paddingTop:"5rem", textAlign: "center",marginTop:"0rem",marginLeft:0}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
