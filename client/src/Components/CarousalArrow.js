import React from "react";

export const NextArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{ ...props.style, backgroundColor: "#000000" }}
      onClick={props.onClick}
    />
  );
};
export const PrevArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{ ...props.style, backgroundColor: "#000000" }}
      onClick={props.onClick}
    />
  );
};
