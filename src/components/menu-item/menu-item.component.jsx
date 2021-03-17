import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  return (
    <Link to={`/shop/${linkUrl}`} className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </Link>
  );
};

export default withRouter(MenuItem);
