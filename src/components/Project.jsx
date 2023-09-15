import React from "react";
import ArticleFooter from "./ArticleFooter/ArticleFooter";

const OverlayArray = ["Before", "During", "After"];

export function Project(props) {
  const { detailImage, images, projectName, projectDesc, bulletPoints, more } =
    props;

  return (
    <>
      <div className="project-page">
        <header>
          <h1>{projectName}</h1>
          <p>{projectDesc}</p>
        </header>
        <div className="spacer" />
        <section className="project-images">
          {images.map((image, index) => (
            <div className="image-wrapper" key={index}>
              <img src={image} alt={`Project Image ${index}`} />
              <div className="image-overlay">{OverlayArray[index]}</div>
            </div>
          ))}
        </section>
        <section className="project-container">
          <div className="project-details">
            <ul>
              {bulletPoints.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
          <div className="project-detail-image">
            <img src={detailImage} alt={`Project Detail Image`} />
          </div>
        </section>
        {more && (
          <>
            <section className="project-more-info">
              <h2>{more.title1}</h2>
              <p>{more.detail1}</p>
            </section>
            <section className="project-container">
              <div className="project-detail-image">
                <img src={more.detailImage1} alt={`Project Detail Image`} />
              </div>
              <div className="project-details">
                <ul>
                  {more.bulletPoints1?.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </section>
          </>
        )}
        <div style={{ height: 200 }}></div>
      </div>
      <ArticleFooter />
    </>
  );
}
