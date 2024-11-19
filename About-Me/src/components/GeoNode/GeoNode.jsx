import "./GeoNode.css";
import geonode from "../../images/geo-nodes6.mp4";

const GeoNode = () => {
  return (
    <>
      <div className="geonode__container">
        <video className="geonode" autoPlay loop muted>
          <source src={geonode}></source>
        </video>
      </div>
    </>
  );
};

export default GeoNode;
