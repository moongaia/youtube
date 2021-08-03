import React from "react";
import Video from "./video";

const VideoList = (props) => (
  <ul>
    {props.videos.map((video) => (
      <Video key={video.id} video={video} />
    ))}
  </ul>
);

export default VideoList;
