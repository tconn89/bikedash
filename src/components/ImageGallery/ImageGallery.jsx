import React from "react";
import { Row, Col } from "react-bootstrap";
import { Sticker } from "components/Sticker/Sticker";

const OverlayArray = ["Before", "During", "After"];

export const ImageGallery = ({ images, stickerType }) => {
  const getSticker = (type, index) => {
    if (type === "blueprint") return <Sticker text="BLUE PRINT" />;
    return <div className="image-overlay">{OverlayArray[index]}</div>;
  };
  const imageCount = images.length;
  // if two images ==> 3 column grid
  // if three images ==> 2 column grid
  const colSize = images.length == 2 ? 6 : 4;
  return (
    <section className="project-images">
      {/* Use Bootstrap grid classes to create a responsive grid */}
      <Row>
        {images.map((image, index) => (
          <Col
            key={index}
            lg={colSize}
            md={colSize}
            sm={6}
            xs={12}
            className={`relative ${
              stickerType === "blueprint" ? "overflow-hidden" : ""
            }`}
          >
            <div classname="relative">
              <div className="image-wrapper">
                <img src={image} alt={`Project Image ${index}`} />
              </div>

              {getSticker(stickerType, index)}
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};
