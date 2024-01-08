import React from "react";
import { Row, Col } from "react-bootstrap"; // Import Bootstrap grid components
import ArticleFooter from "./ArticleFooter/ArticleFooter";
import { ImageGallery } from "./ImageGallery/ImageGallery";

export function Project(props) {
  const {
    stickerType,
    detailImage,
    images,
    projectName,
    projectDesc,
    bulletPoints,
    more,
  } = props;

  return (
    <>
      <div className="project-page">
        <header>
          <h1>{projectName}</h1>
          <p>{projectDesc}</p>
        </header>
        <div className="spacer" />
        <ImageGallery images={images} stickerType={stickerType} />
        <section className="project-container">
          {/* Use Bootstrap grid classes to create a two-column layout */}
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="project-details">
                <ul>
                  {bulletPoints.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="project-detail-image">
                <img src={detailImage} alt={`Project Detail Image`} />
              </div>
            </Col>
          </Row>
        </section>
        {more && (
          <>
            <section className="project-more-info">
              <h2>{more.title1}</h2>
              <p>{more.detail1}</p>
            </section>
            <section className="project-container">
              {/* Use Bootstrap grid classes to create a two-column layout */}
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <div className="project-detail-image">
                    <img src={more.detailImage1} alt={`Project Detail Image`} />
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div className="project-details">
                    <ul>
                      {more.bulletPoints1?.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </Col>
              </Row>
            </section>
          </>
        )}
        <div style={{ height: 200 }}></div>
      </div>
      <ArticleFooter />
    </>
  );
}
