import "./Video.css";
import React from "react";

const Video = ({src}) => {
    return (
        <div className="video__container">
            <div className="video__overlay"></div>
            <video className="video" autoPlay muted loop src={src}></video>
        </div>
    )
}

export default Video;