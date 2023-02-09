import React from "react";

function Avatar({
  bodyState,
  eyesState,
  hairState,
  mouthState,
  eyebrowsState,
  glassesState,
  clothesL1State,
  clothesL2State,
  clothesL3State,
}) {
  return (
    <div className="avatar-image">
      <img className="bodyImage" src={bodyState} alt="" />
      <img className="eyeImage" src={eyesState} alt="" />
      <img className="hairImage" src={hairState} alt="" />
      <img className="mouthImage" src={mouthState} alt="" />
      <img className="eyebrowsImage" src={eyebrowsState} alt="" />
      <img className="glassesImage" src={glassesState} alt="" />
      <img className="clothingL1Image" src={clothesL1State} alt="" />
      <img className="clothingL2Image" src={clothesL2State} alt="" />
      <img className="clothingL3Image" src={clothesL3State} alt="" />
    </div>
  );
}

export default Avatar;
