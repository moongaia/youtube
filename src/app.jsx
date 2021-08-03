import React, { useEffect, useState } from "react";
import "./app.css";
import Search from "./components/search";
import VideoList from "./components/video_list/videoList";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBJ-LCx7Kr9MSosB_2ht70xyPrg0yRp3Bc",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Search />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
