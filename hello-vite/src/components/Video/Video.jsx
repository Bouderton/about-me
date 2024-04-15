import "./Video.css";
import React from "react";

const Video = ({vid}) => {
    return (
        <div className="video__container">
            <div className="video__overlay"></div>
            <video className="video" autoPlay muted loop src={vid}></video>
        </div>
    )
}

export default Video;