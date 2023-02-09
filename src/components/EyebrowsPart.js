import React from "react";

function EyebrowsPart({ imageSrc, id, handleEyebrows, state }) {
  return (
    <div
      className={`clickable-square ${
        `character/eyebrows/${id + 1}.png` === state ? "active" : ""
      }`}
      onClick={handleEyebrows}
    >
      <img className="images" src={imageSrc} alt="" height="50" width="50" />
    </div>
  );
}

export default EyebrowsPart;
