import React from "react";

function ClothesL2Part({ imageSrc, handleClothesL2, state, id }) {
  return (
    <div
      className={`clickable-square ${
        `character/clothes/layer_2/${id + 1}.png` === state ? "active" : ""
      }`}
      onClick={handleClothesL2}
    >
      <img className="images" src={imageSrc} alt="" height="50" width="50" />
    </div>
  );
}

export default ClothesL2Part;
