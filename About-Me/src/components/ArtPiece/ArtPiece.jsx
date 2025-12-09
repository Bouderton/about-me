import "./ArtPiece.css";

// DONT FORGET TO ADD MOTION AND ADAPTABILITY

const ArtPiece = ({ image }) => {
  return (
    <div className="art-piece__container">
      <div className="art-piece">
        <img className="art-piece__img" source={image} />
      </div>
    </div>
  );
};

export default ArtPiece;
