import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/global.css";

const PodcastDetail = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/podcasts/${id}`)
      .then((res) => res.json())
      .then((data) => setPodcast(data))
      .catch((err) => console.error("Error fetching podcast:", err));
  }, [id]);

  if (!podcast) return <p>Loading podcast...</p>;

  return (
    <div className="podcast-detail">
      <img src={podcast.image} alt={podcast.title} />
      <h1>{podcast.title}</h1>
      <p>{podcast.description}</p>
      <audio controls>
        <source src={podcast.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default PodcastDetail;
