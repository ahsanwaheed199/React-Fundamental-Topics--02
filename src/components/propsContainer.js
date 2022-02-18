import React from "react";
import Props from "./props";

const PropsContainer = () => {
  return (
    <div>
      <Props name="Zaryab">
        <h1>will you buy a car?</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem
        </p>
      </Props>
      <Props name="Asim">
        <input type="text" placeholder="enter your item" />
        <button>Click</button>
      </Props>
    </div>
  );
};

export default PropsContainer;
