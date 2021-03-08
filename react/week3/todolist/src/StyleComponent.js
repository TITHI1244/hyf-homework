import { React } from "react";

const StyleComponent = (props) => {
  return (
    <div
      className="styled-border"
      style={{ border: "2px solid black", margin: "1% auto" }}
    >
      {props.children}
    </div>
  );
};

export default StyleComponent;
