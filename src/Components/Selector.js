import React from "react";

export const Selector = ({ setType }) => {
  return (
    <div>
      {" "}
      <br />
      Type:
      <select
        className="form-select"
        onChange={(e) => {
          setType(e.target.value);
        }}
      >
        <option value="" selected>
          All
        </option>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        <option value="Rabbit">Rabbit</option>
      </select>
    </div>
  );
};
