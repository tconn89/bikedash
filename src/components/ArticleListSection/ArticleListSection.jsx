import React from "react";
import { Row, Col } from "react-bootstrap"; // Import Bootstrap grid components
import "./Style.css";

export const ArticleListSection = ({ articles }) => {
  return (
    <div className="outer-container">
      <div className="image-centric-section">
        <h2>Projects</h2>
      </div>
      <div className="image-centric-section">
        {/* Use Bootstrap grid classes to create a responsive grid */}
        <Row>
          {articles.map((article, index) => (
            <Col key={index} lg={6} md={6} sm={6} xs={12}>
              <div className="article-container">
                <a href={article.link} className="article-link">
                  <img
                    src={article.imageSrc}
                    alt={article.title}
                    className="article-image"
                  />
                  <h3 className="article-title">{article.title}</h3>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
