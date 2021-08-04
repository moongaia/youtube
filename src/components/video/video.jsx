import React from "react";
import styles from "./video.module.css";

//props.video, props.video.snippet
const Video = ({ video, video: { snippet }, handleClick, display }) => {
  const displayType = display === "list" ? styles.list : styles.grid;
  return (
    <li className={`${styles.container} ${displayType}`}>
      <div className={styles.video} onClick={() => handleClick(video)}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default Video;
