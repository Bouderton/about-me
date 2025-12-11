import "./ArtPiece.css";
// import { motion } from "motion/react";

// DONT FORGET TO ADD MOTION AND ADAPTABILITY

const ArtPiece = ({ img }) => {
  return (
    <div className="art-piece__container">
      <div className="art-piece">
        <img
          //   whileHover={{ scale: 1.05 }}
          //   transition={{ duration: 0.2 }}
          className="art-piece__img"
          src={img}
        />
      </div>
    </div>
  );
};

export default ArtPiece;
