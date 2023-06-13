import React from "react";

export const CircleImageButton = ({ text, textSingleLine }) => {
  const parsedText = textSingleLine ? [text] : text.split(" ");
  const SingleLineButtonText = () => <span>{text}</span>;
  const DoubleLineButtonText = () => (
    <span>
      {parsedText[0]}
      <br />
      {parsedText[1]}
    </span>
  );
  return (
    <a href="/core-values">
      <div className="circle" j>
        <img src="img/deck-repair2.jpg" alt="Circle Image 1" />
        <div className="overlay">
          {textSingleLine ? <SingleLineButtonText /> : <DoubleLineButtonText />}
        </div>
      </div>
    </a>
  );
};
