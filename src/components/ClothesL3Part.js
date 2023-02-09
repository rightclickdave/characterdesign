import React from "react";

function ClothesL3Part({ imageSrc, handleClothesL3, state, id }) {
  return (
    <div
      className={`clickable-square ${
        `character/clothes/layer_3/${id + 1}.png` === state ? "active" : ""
      }`}
      onClick={handleClothesL3}
    >
      <img className="images" src={imageSrc} alt="" height="50" width="50" />
    </div>
  );
}

export default ClothesL3Part;
