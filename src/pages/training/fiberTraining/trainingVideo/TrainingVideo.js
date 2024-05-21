import React from "react";
import "./TrainingVideo.scss";

const TrainingVideo = ({ videoId }) => {
    return (
        <div className="training-video-wrapper">
            <iframe
                width="920"
                height="518"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video"
            ></iframe>
        </div>
    );
};

export default TrainingVideo;
