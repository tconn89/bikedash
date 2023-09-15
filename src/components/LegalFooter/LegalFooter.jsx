import React from "react";
import "./Style.css";

export const LegalFooter = () => {
  return (
    <div className="article-footer">
      <p className="footer-text">
        Pegasus Decking LLC - Serving the Raleigh area since 2023!
      </p>
      <div className="flex-it">
        <div className="legal-box">
          <p className="footer-text">Legal</p>
          <a className="terms">Terms of Service</a>
          <br />
          <a className="reviews">Google Reviews</a>
        </div>
      </div>
    </div>
  );
};
