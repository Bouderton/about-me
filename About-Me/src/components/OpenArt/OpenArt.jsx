import "./OpenArt.css";
import { motion } from "motion/react";
import { useState } from "react";

// this could work but may be better to just integrate it directly
const OpenArt = ({ isOpen, artImage, onClose }) => {
  return (
    <>
      <div className="open-art__container">
        <div className="open-art">
          <button
            type="button"
            onClick={onClose}
            className="open-art__close-button"
          />
          <img className="open-art__img" image={artImage} />
        </div>
      </div>
    </>
  );
};

export default OpenArt;
