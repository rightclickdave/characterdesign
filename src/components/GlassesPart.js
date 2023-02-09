import React from "react";

function GlassesPart({ imageSrc, id, handleGlasses, state }) {
  console.log(id, state);
  return (
    <div
      className={`clickable-square ${
        `character/accessories/glasses/${id + 1}.png` === state ? "active" : ""
      }`}
      onClick={handleGlasses}
    >
      <img className="images" src={imageSrc} alt="" height="50" width="50" />
    </div>
  );
}

export default GlassesPart;
