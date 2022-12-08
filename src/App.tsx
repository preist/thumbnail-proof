import React, { useState } from "react";
import "./App.css";
import defaultFrontImage from "./defaultFrontImage.jpg";
import defaultBackImage from "./defaultBackImage.jpg";
import Cover from "./Cover";
import Back from "./Back";
import Uploader from "./Uploader";

function App() {
  const [frontImage, setFrontImage] = useState(defaultFrontImage);
  const [backImage, setBackImage] = useState(defaultBackImage);

  return (
    <div className="App">
      <Uploader setFrontImage={setFrontImage} setBackImage={setBackImage} />
      <section className="App-container">
        <Cover src={frontImage} className="Cover-preview" />
        <Back src={backImage} className="Back-preview" />
      </section>
    </div>
  );
}

export default App;
