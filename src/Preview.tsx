import React from "react";
import "./Preview.scss";
import maskLayerImage from "./assets/maskLayerImage.png";

interface PreviewProps {
  frontImage: string;
  backImage: string;
}

function Preview(props: PreviewProps) {
  const { frontImage, backImage } = props;

  return (
    <div className="Preview">
      <section className="Preview-container">
        <div className="Preview-mask">
          <img src={maskLayerImage} alt="mask" />
        </div>
        <div className="Preview-cover">
          <img src={frontImage} alt="cover" className="Preview-cover-image" />
        </div>
        <div className="Preview-back">
          <img src={backImage} alt="back" className="Preview-back-image" />
        </div>
      </section>
    </div>
  );
}

export default Preview;
