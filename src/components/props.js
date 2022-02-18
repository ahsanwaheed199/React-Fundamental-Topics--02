import React from "react";
const Props = (props) => {
  const styles = {
    border: "1px solid black",
    margin: "0.8rem",
  };
  return (
    <div style={styles}>
      <h1>Hello {props.name}</h1>
      {props.children}
    </div>
  );
};

export default Props;
