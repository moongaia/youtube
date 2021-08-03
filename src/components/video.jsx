import React from "react";

const Video = (props) => (
  <div className="video">
    <span className="video__content">content</span>
    <span className="video__title">{props.video.snippet.title}</span>
    <span className="video__description">description</span>
  </div>
);

export default Video;
