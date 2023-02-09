import React from "react";

function HairPart({ imageSrc, id, handleHair, state }) {
  return (
    <div
      className={`clickable-square ${
        `character/hair/${id + 1}.png` === state ? "active" : ""
      }`}
      onClick={handleHair}
    >
      <img className="images" src={imageSrc} alt="" height="50" width="50" />
    </div>
  );
}

export default HairPart;
