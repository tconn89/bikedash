import React from "react";
import "./Style.css";
import { useNavigate } from "react-router-dom";

const ArticleFooter = () => {
  const navigate = useNavigate();
  const navToContact = () => navigate("/contact-us");
  return (
    <div className="article-footer">
      <p className="footer-text">
        Ready to transform your outdoor space? Contact us for a free estimate!
      </p>
      <button className="contact-button" onClick={navToContact}>
        Contact Us
      </button>
    </div>
  );
};

export default ArticleFooter;
