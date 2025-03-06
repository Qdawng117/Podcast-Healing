import React from "react";
import "../../styles/global.css";

const PodcastPlayer = ({ audioUrl }) => {
  return (
    <div className="podcast-player">
      <audio controls>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default PodcastPlayer;
