import React from "react";

const OverlayArray = ["Before", "During", "After"];

export function Project(props) {
  const { detailImage, images, projectName, projectDesc, bulletPoints } = props;

  return (
    <div className="project-page">
      <header>
        <h1>{projectName}</h1>
        <p>{projectDesc}</p>
      </header>
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
          <h2>Project Details</h2>
          <ul>
            {bulletPoints.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
        <div className="project-detail-image">
          <h2>Aluminum Balusters</h2>
          <div className="spacer" />
          <img src={detailImage} alt={`Project Detail Image`} />
          <p>Installing the aluminum poles was hard.</p>
        </div>
      </section>
      <section className="project-more-info">
        <h2>More Information</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          suscipit ligula. Nullam nec purus in nunc vehicula dapibus at eget
          ligula.
        </p>
      </section>
    </div>
  );
}
