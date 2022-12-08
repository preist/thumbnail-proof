import React from "react";
import classNames from "classnames";
import "./Back.css";

interface BackProps {
  className: string;
  src: string;
}

function Back(props: BackProps) {
  const { src, className } = props;
  const classes = classNames("Back", className);

  return <img src={src} alt="Back img" className={classes} />;
}

export default Back;
