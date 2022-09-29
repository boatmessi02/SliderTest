import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="containerFooter">
        <span className="wrapperFooter ">
          <p>
            Copyright Ⓒ Since 2022 by{" "}
            <a
              className="links "
              href="https://www.facebook.com/messiboat.score.3"
              target="_blank"
              rel="noreferrer noopener"
            >
              Teerapat Junchuen
            </a>{" "}
            View source code on{" "}
            <a
              className="links"
              href="https://github.com/boatmessi02"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </a>
          </p>
        </span>
      </div>
    </>
  );
};

export default Footer;
