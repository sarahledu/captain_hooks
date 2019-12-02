import React from "react";
import "../styles/resource.css";

const CardResource = ({ url, description, title }) => {
  return (
    <aside className="resource">
      <h3 className="resource-title">{title}</h3>
      <hr />
      <p className="resource-description">{description}</p>
      <a className="resource-link" rel="noopener noreferrer" target="_blank" href={url}>
        Go to
      </a>
      </aside>
  );
};

export default CardResource;
