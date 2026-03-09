import "./ArtPiece.css";
// import { motion } from "motion/react";

// DONT FORGET TO ADD MOTION AND ADAPTABILITY

const ArtPiece = ({ img, isOpen, onClose, onSelectCard }) => {
  return (
    <div className={`${isOpen ? " art__opened" : ""}`}>
      <div className="art-piece__container">
        <div className="art-piece">
          <button
            type="button"
            onClick={onClose}
            className={`${isOpen ? "art__close-button" : "art__close-button-H"}`}
          />
          <img
            // whileHover={{ scale: 1.05 }}
            // transition={{ duration: 0.2 }}
            className="art-piece__img"
            src={img}
            onClick={() => {
              onSelectCard(img);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtPiece;
