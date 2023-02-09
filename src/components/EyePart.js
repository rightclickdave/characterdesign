import React from "react";

function Eyepart({ imageSrc, id, handleEyes, state }) {
  console.log(state, id);
  return (
    <div
      className={`clickable-square ${
        `character/eyes/${id + 1}.png` === state ? "active" : ""
      }`}
      onClick={handleEyes}
    >
      <img className="images" src={imageSrc} alt="" height="50" width="50" />
    </div>
  );
}

export default Eyepart;
