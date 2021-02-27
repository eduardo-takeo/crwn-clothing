import React from "react";

import "./minus-icon.styles.scss";

import { ReactComponent as Icon } from "assets/minus.svg";

export default function MinusIcon({ onClick }) {
  return (
    <div onClick={onClick}>
      <Icon className="minus-icon" />
    </div>
  );
}
