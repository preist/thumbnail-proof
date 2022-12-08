import React, { useState } from "react";
import "./Uploader.css";
import classNames from "classnames";

interface UploaderProps {
  setFrontImage: React.Dispatch<React.SetStateAction<string>>;
  setBackImage: React.Dispatch<React.SetStateAction<string>>;
}

declare global {
  interface Window {
    MY_GREETING_MESSAGE: string;
  }
}

function Uploader(props: UploaderProps) {
  const { setFrontImage, setBackImage } = props;
  const [isDragging, setIsDragging] = useState<Boolean>(false);
  const classes = classNames("Uploader", { active: isDragging });

  const handleDrag = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(true);
  };

  const handleDragEnd = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
  };

  const handleDrop = (e: any) => {
    e.stopPropagation();
    e.preventDefault();

    const { files } = e.dataTransfer;

    if (files.length < 2) {
      setIsDragging(false);

      alert("Please upload at least two images");

      console.log(files.length);
      console.log(files);
      return;
    }

    setFrontImage(window.URL.createObjectURL(files[0]));
    setBackImage(window.URL.createObjectURL(files[1]));

    setIsDragging(false);
  };

  return (
    <div
      className={classes}
      onDrag={handleDrag}
      onDragOver={handleDrag}
      onDragEnter={handleDrag}
      onDragLeave={handleDragEnd}
      onDrop={handleDrop}
    >
      <div className="Uploader-cta">
        Drag and drop 2 images for front and back
      </div>
      <div className="Uploader-drop-cta">Drop your image here</div>
    </div>
  );
}

export default Uploader;
