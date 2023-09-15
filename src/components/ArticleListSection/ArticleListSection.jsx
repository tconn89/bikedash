import React from "react";
import "./Style.css";

export const ArticleListSection = ({ articles }) => {
  return (
    <div className="outer-container">
      <div className="image-centric-section">
        <h2>Projects</h2>
      </div>
      <div className="image-centric-section">
        {articles.map((article, index) => (
          <div className="article-container" key={index}>
            <a href={article.link} className="article-link">
              <img
                src={article.imageSrc}
                alt={article.title}
                className="article-image"
              />
              <h3 className="article-title">{article.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
