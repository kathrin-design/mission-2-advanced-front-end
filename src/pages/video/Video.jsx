import React from "react";
import VideoHeader from "../../components/header/VideoHeader";
import VideoFooter from "../../components/footer/VideoFooter";

const Video = () => {
  return (
    <>
      <VideoHeader />
      <div className="d-flex flex-row">
        <div className="d-flex flex-column border w-75">
          <iframe
            className="w-100 h-100"
            src="https://www.youtube.com/embed/rfscVS0vtbw?si=uZgGxEGJSNq6sNLI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <VideoFooter />
    </>
  );
};

export default Video;
