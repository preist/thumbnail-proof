import classNames from "classnames";
import React from "react";
import "./Cover.css";

interface CoverProps {
  className: string;
  src: string;
}

function Cover(props: CoverProps) {
  const { src, className } = props;
  const classes = classNames("Cover", className);

  return <img src={src} alt="cover img" className={classes} />;
}

export default Cover;
