import "./Art.css";
import OpenArt from "../OpenArt/OpenArt";
import Break from "../Break/Break";
import { artPieceList } from "../../utils/consts";
import ArtPiece from "../ArtPiece/ArtPiece";
import { motion } from "motion/react";

const Art = ({ artRef, onSelectCard, onClose, isOpen }) => {
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
      <ul className="art__list-container">
        {artPieceList.map((art, index) => {
          return (
            <li className="art__list" custom={index} key={index}>
              <ArtPiece
                img={art.img}
                onClose={onClose}
                isOpen={isOpen}
                onSelectCard={onSelectCard}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

// add clicking to fullscreen feature DUMBASS!!!

export default Art;
