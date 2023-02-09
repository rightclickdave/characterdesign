import React from "react";

function BodyPart({ imageSrc, id, handleBody, state }) {
  return (
    <div
      className={`clickable-square ${
        `character/body/${id + 1}.png` === state ? "active" : ""
      }`}
      onClick={handleBody}
    >
      <img
        className="images"
        src={imageSrc}
        alt=""
        height="50"
        width="50"
        id={id}
      />
    </div>
  );
}

export default BodyPart;
