import React from "react";

import "./plus-icon.styles.scss";

import { ReactComponent as Icon } from "assets/plus.svg";

export default function PlusIcon({ onClick }) {
  return (
    <div onClick={onClick}>
      <Icon className="plus-icon" />
    </div>
  );
}
