import React from "react";

import "./checkout-delete-icon.styles.scss";

import { ReactComponent as TrashIcon } from "assets/delete.svg";

export default function DeleteIcon({ onClick }) {
  return (
    <div onClick={onClick}>
      <TrashIcon className="delete-icon" />
    </div>
  );
}
