import "./ArtPiece.css";

// DONT FORGET TO ADD MOTION AND ADAPTABILITY

const ArtPiece = ({ img }) => {
  return (
    <div className="art-piece__container">
      <div className="art-piece">
        <img className="art-piece__img" src={img} />
      </div>
    </div>
  );
};

export default ArtPiece;
