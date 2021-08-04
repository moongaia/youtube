import React from "react";
import Video from "../video/video";
import styles from "./video_list.module.css";

const VideoList = ({ videos, handleClick, display }) => (
  <ul className={styles.videos}>
    {videos.map((video) => (
      <Video
        key={video.id}
        video={video}
        handleClick={handleClick}
        display={display}
      />
    ))}
  </ul>
);

export default VideoList;
