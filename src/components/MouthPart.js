import React from "react";

function MouthPart({ imageSrc, id, handleMouth, state }) {
  return (
    <div
      className={`clickable-square ${
        `character/mouths/${id + 1}.png` === state ? "active" : ""
      }`}
      onClick={handleMouth}
    >
      <img className="images" src={imageSrc} alt="" height="50" width="50" />
    </div>
  );
}
export default MouthPart;
