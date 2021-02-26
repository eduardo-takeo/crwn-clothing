import React from "react";

import "./empty-prompt.styles.scss";
import { ReactComponent as EmptyIcon } from "assets/empty.svg";

const DEFAULT_TITLE = "No items found";
const DEFAULT_SUBTITLE = "Please try again later";

export default function EmptyPrompt({
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
}) {
  return (
    <section>
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="subtitle">{subtitle}</p>
        <EmptyIcon className="empty-icon" />
      </div>
    </section>
  );
}
