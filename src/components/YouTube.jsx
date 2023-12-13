import React, { useState } from "react";

const YouTubePlayer = () => {
  // State to manage the video ID
  const [videoId, setVideoId] = useState("your_video_id");

  // Function to update the video ID
  const changeVideo = (newVideoId) => {
    setVideoId(newVideoId);
  };

  // URL with the modestbranding parameter
  const embedUrl = `https://www.youtube.com/embed/${videoId}?modestbranding=1`;

  return (
    <div>
      <div>
        {/* Input to change the video ID */}
        <label htmlFor="videoIdInput">Enter YouTube Video ID: </label>
        <input
          type="text"
          id="videoIdInput"
          value={videoId}
          onChange={(e) => changeVideo(e.target.value)}
        />
      </div>
      <div>
        {/* Embedded YouTube video with modestbranding */}
        <iframe
          width="560"
          height="315"
          src={embedUrl}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubePlayer;
