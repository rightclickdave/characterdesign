import "./App.css";
import Header from "./components/Header";
import React from "react";
import BodyPart from "./components/BodyPart";
import EyePart from "./components/EyePart";
import HairPart from "./components/HairPart";
import MouthPart from "./components/MouthPart";
import EyebrowsPart from "./components/EyebrowsPart";
import GlassesPart from "./components/GlassesPart";
import ClothesL1Part from "./components/ClothesL1Part";
import ClothesL2Part from "./components/ClothesL2Part";
import ClothesL3Part from "./components/ClothesL3Part";
import Avatar from "./components/Avatar";

function App() {
  // total numer of items in each PartList
  const total = {
    body: 17,
    eyes: 17,
    hair: 73,
    mouth: 24,
    eyebrows: 15,
    hat: 28,
    glasses: 17,
    clothing1: 5,
    clothing2: 5,
    clothing3: 9,
  };

  const bodyImageArray = [];
  for (let i = 0; i < total.body; i++) {
    bodyImageArray.push(`character/body/${i + 1}.png`);
  }

  const [bodyState, setBodyState] = React.useState(bodyImageArray[0]);

  const bodySelection = bodyImageArray.map((item, index) => {
    return (
      <BodyPart
        imageSrc={item}
        state={bodyState}
        id={index}
        handleBody={(e) => {
          setBodyState(item);
        }}
      />
    );
  });

  const eyesImageArray = [];
  for (let i = 0; i < total.eyes; i++) {
    eyesImageArray.push(`character/eyes/${i + 1}.png`);
  }

  const [eyesState, setEyesState] = React.useState(eyesImageArray[0]);

  const eyesSelection = eyesImageArray.map((item, index) => {
    return (
      <EyePart
        imageSrc={item}
        state={eyesState}
        id={index}
        handleEyes={(e) => {
          setEyesState(item);
        }}
      />
    );
  });

  const hairImageArray = [];
  for (let i = 0; i < total.hair; i++) {
    hairImageArray.push(`character/hair/${i + 1}.png`);
  }

  const [hairState, setHairState] = React.useState(hairImageArray[0]);

  const hairSelection = hairImageArray.map((item, index) => {
    return (
      <HairPart
        imageSrc={item}
        state={hairState}
        id={index}
        key={index}
        handleHair={(e) => {
          setHairState(item);
        }}
      />
    );
  });

  const mouthImageArray = [];
  for (let i = 0; i < total.mouth; i++) {
    mouthImageArray.push(`character/mouths/${i + 1}.png`);
  }

  const [mouthState, setMouthState] = React.useState(mouthImageArray[0]);

  const mouthSelection = mouthImageArray.map((item, index) => {
    return (
      <MouthPart
        imageSrc={item}
        state={mouthState}
        id={index}
        handleMouth={(e) => {
          setMouthState(item);
        }}
      />
    );
  });

  const eyebrowsImageArray = [];
  for (let i = 0; i < total.eyebrows; i++) {
    eyebrowsImageArray.push(`character/eyebrows/${i + 1}.png`);
  }

  const [eyebrowsState, setEyebrowsState] = React.useState(
    eyebrowsImageArray[0]
  );

  const eyebrowsSelection = eyebrowsImageArray.map((item, index) => {
    return (
      <EyebrowsPart
        imageSrc={item}
        state={eyebrowsState}
        id={index}
        handleEyebrows={(e) => {
          setEyebrowsState(item);
        }}
      />
    );
  });

  const glassesImageArray = [];
  for (let i = 0; i < total.glasses; i++) {
    glassesImageArray.push(`character/accessories/glasses/${i + 1}.png`);
  }

  const [glassesState, setGlassesState] = React.useState(glassesImageArray[0]);

  const glassesSelection = glassesImageArray.map((item, index) => {
    return (
      <GlassesPart
        imageSrc={item}
        state={glassesState}
        id={index}
        handleGlasses={(e) => {
          setGlassesState(item);
        }}
      />
    );
  });

  const clothesL1ImageArray = [];
  for (let i = 0; i < total.clothing1; i++) {
    clothesL1ImageArray.push(`character/clothes/layer_1/${i + 1}.png`);
  }

  const [clothesL1State, setClothesL1State] = React.useState(
    clothesL1ImageArray[0]
  );

  const clothesL1Selection = clothesL1ImageArray.map((item, index) => {
    return (
      <ClothesL1Part
        imageSrc={item}
        state={clothesL1State}
        id={index}
        handleClothesL1={(e) => {
          setClothesL1State(item);
        }}
      />
    );
  });

  const clothesL2ImageArray = [];
  for (let i = 0; i < total.clothing2; i++) {
    clothesL2ImageArray.push(`character/clothes/layer_2/${i + 1}.png`);
  }

  const [clothesL2State, setClothesL2State] = React.useState(
    clothesL2ImageArray[0]
  );

  const clothesL2Selection = clothesL2ImageArray.map((item, index) => {
    return (
      <ClothesL2Part
        imageSrc={item}
        state={clothesL2State}
        id={index}
        handleClothesL2={(e) => {
          setClothesL2State(item);
        }}
      />
    );
  });

  const clothesL3ImageArray = [];
  for (let i = 0; i < total.clothing3; i++) {
    clothesL3ImageArray.push(`character/clothes/layer_3/${i + 1}.png`);
  }

  const [clothesL3State, setClothesL3State] = React.useState(
    clothesL3ImageArray[0]
  );

  const clothesL3Selection = clothesL3ImageArray.map((item, index) => {
    return (
      <ClothesL3Part
        imageSrc={item}
        state={clothesL3State}
        id={index}
        handleClothesL3={(e) => {
          setClothesL3State(item);
        }}
      />
    );
  });

  // const [bodyState, setBodyState] = React.useState(bodyImageArray[0]);
  // const [eyesState, setEyesState] = React.useState(eyesImageArray[0]);
  // const [hairState, setHairState] = React.useState(hairImageArray[0]);
  // const [mouthState, setMouthState] = React.useState(mouthImageArray[0]);
  // const [eyebrowsState, setEyebrowsState] = React.useState(
  //   eyebrowsImageArray[0]
  // );
  // const [glassesState, setGlassesState] = React.useState(glassesImageArray[0]);
  // const [clothesL1State, setClothesL1State] = React.useState(
  //   clothesL1ImageArray[0]
  // );
  // const [clothesL2State, setClothesL2State] = React.useState(
  //   clothesL2ImageArray[0]
  // );
  // const [clothesL3State, setClothesL3State] = React.useState(
  //   clothesL3ImageArray[0]
  // );

  function randomize() {
    setBodyState(bodyImageArray[Math.floor(Math.random() * total.body)]);
    setEyesState(eyesImageArray[Math.floor(Math.random() * total.eyes)]);
    setHairState(hairImageArray[Math.floor(Math.random() * total.hair)]);
    setMouthState(mouthImageArray[Math.floor(Math.random() * total.mouth)]);
    setEyebrowsState(
      eyebrowsImageArray[Math.floor(Math.random() * total.eyebrows)]
    );
    setGlassesState(
      glassesImageArray[Math.floor(Math.random() * total.glasses)]
    );
    setClothesL1State(
      clothesL1ImageArray[Math.floor(Math.random() * total.clothing1)]
    );
    setClothesL2State(
      clothesL2ImageArray[Math.floor(Math.random() * total.clothing2)]
    );
    setClothesL3State(
      clothesL3ImageArray[Math.floor(Math.random() * total.clothing3)]
    );
  }

  return (
    <>
      <Header />
      <div
        className="mainContainer"
        style={{
          backgroundImage: `url("https://staticdelivery.nexusmods.com/images/3474/100288838-1627234162.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="avatarContainer">
          <Avatar
            bodyState={bodyState}
            eyesState={eyesState}
            hairState={hairState}
            mouthState={mouthState}
            eyebrowsState={eyebrowsState}
            glassesState={glassesState}
            clothesL1State={clothesL1State}
            clothesL2State={clothesL2State}
            clothesL3State={clothesL3State}
          />
          <button className="randomBtn" onClick={randomize}>
            Randomize Traits
          </button>
        </div>
        <div className="selectorContainer">
          <h2>Body</h2>
          <div className="imageContainer">{bodySelection}</div>
          <h2>Eyes</h2>
          <div className="imageContainer">{eyesSelection}</div>
          <h2>Hair</h2>
          <div className="imageContainer">{hairSelection}</div>
          <h2>Mouth</h2>
          <div className="imageContainer">{mouthSelection}</div>
          <h2>Eyebrows</h2>
          <div className="imageContainer">{eyebrowsSelection}</div>
          <h2>Glasses</h2>
          <div className="imageContainer">{glassesSelection}</div>
          <h2>Clothing (Layer 1)</h2>
          <div className="imageContainer">{clothesL1Selection}</div>
          <h2>Clothing (Layer 2)</h2>
          <div className="imageContainer">{clothesL2Selection}</div>
          <h2>Clothing (Layer 3)</h2>
          <div className="imageContainer">{clothesL3Selection}</div>
        </div>
      </div>
    </>
  );
}

export default App;
