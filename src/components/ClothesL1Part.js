import React from "react";

function ClothesL1Part({ imageSrc, handleClothesL1, state, id }) {
  return (
    <div
      className={`clickable-square ${
        `character/clothes/layer_1/${id + 1}.png` === state ? "active" : ""
      }`}
      onClick={handleClothesL1}
    >
      <img className="images" src={imageSrc} alt="" height="50" width="50" />
    </div>
  );
}

export default ClothesL1Part;
