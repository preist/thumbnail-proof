import React, { useState } from "react";
import "./App.css";
import defaultImage from "./defaultImage.jpg";
import Cover from "./Cover";
import Uploader from "./Uploader";

function App() {
  const [image, setImage] = useState(defaultImage);

  return (
    <div className="App">
      <Uploader setImage={setImage} />
      <section className="App-container">
        <Cover src={image} className="Cover-preview" />
      </section>
    </div>
  );
}

export default App;
