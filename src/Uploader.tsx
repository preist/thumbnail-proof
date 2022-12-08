import React, { useEffect, useState } from "react";
import "./Uploader.css";
import classNames from "classnames";

interface UploaderProps {
  setImage: React.Dispatch<React.SetStateAction<string>>;
}

declare global {
  interface Window {
    MY_GREETING_MESSAGE: string;
  }
}

function Uploader(props: UploaderProps) {
  const { setImage } = props;
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

    const droppedFileData = e.dataTransfer;
    setImage(window.URL.createObjectURL(droppedFileData.files[0]));

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
      <div className="Uploader-cta">Drag and drop images</div>
      <div className="Uploader-drop-cta">Drop your image here</div>
    </div>
  );
}

export default Uploader;
