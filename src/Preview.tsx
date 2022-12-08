import React from "react";
import "./Preview.scss";

interface PreviewProps {
  frontImage: string;
  backImage: string;
}

function Preview(props: PreviewProps) {
  const { frontImage, backImage } = props;

  return (
    <div className="Preview">
      <section className="Preview-container">
        <img src={frontImage} alt="cover" className="Preview-cover" />
        <img src={backImage} alt="back" className="Preview-back" />
      </section>
    </div>
  );
}

export default Preview;
