import "./Video.css";
import React from "react";

const Video = ({src}) => {
    return (
        <div className="video__container">
            <div className="video__overlay">
            <video className="video" autoPlay muted loop src={src}></video>
            </div>
        </div>
    )
}

export default Video;