import React from "react";
import "./article.css";

function Article({ imageUrl, date, title }) {
  return (
    <div className="gpt__article-container">
      <div className="gpt__article-container-image">
        <img src={imageUrl} alt="blogImage" />
      </div>
      <div className="gpt__article-container-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}

export default Article;
