import React, { useState } from "react";
import "./App.css";
import defaultFrontImage from "./defaultFrontImage.jpg";
import defaultBackImage from "./defaultBackImage.jpg";
import Uploader from "./Uploader";
import Preview from "./Preview";

function App() {
  const [frontImage, setFrontImage] = useState(defaultFrontImage);
  const [backImage, setBackImage] = useState(defaultBackImage);

  return (
    <div className="App">
      <Uploader setFrontImage={setFrontImage} setBackImage={setBackImage} />
      <section className="App-container">
        <Preview frontImage={frontImage} backImage={backImage} />
      </section>
    </div>
  );
}

export default App;
