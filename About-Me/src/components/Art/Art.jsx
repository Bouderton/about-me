import "./Art.css";
import Break from "../Break/Break";
import ArtPiece from "../ArtPiece/ArtPiece";
import { motion } from "motion/react";

const Art = ({ artRef }) => {
  return (
    <section className="art" ref={artRef}>
      <div className="art__container">
        <div className="art__title-container">
          <h2 className="art__title">Art? Yea</h2>
          <Break direction="left" />
        </div>
        <div className="art__text-container">
          <p className="art__text">
            In my free time I like to mess around with 3D art using programs
            like Blender, Unreal Engine, and Autodesk Maya.
          </p>
          <p className="art__text">Here's a few of my favorites I've made</p>
        </div>
      </div>
      <div className="art__list-container">
        <li className="art__list"></li>
      </div>
    </section>
  );
};

export default Art;
