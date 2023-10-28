import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  console.log(props);
  const contentpStyle = {
    color: color,
    fontSize: "14px"
  };
  return <p style={contentpStyle}>{children}</p>;
};

export default ColorfulMessage;
