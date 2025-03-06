import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/global.css";

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/podcasts")
      .then((res) => res.json())
      .then((data) => setPodcasts(data))
      .catch((err) => console.error("Error fetching podcasts:", err));
  }, []);

  return (
    <div className="podcast-list">
      <h2>All Podcasts</h2>
      {podcasts.length > 0 ? (
        <ul>
          {podcasts.map((podcast) => (
            <li key={podcast._id}>
              <Link to={`/podcasts/${podcast._id}`}>
                <img src={podcast.image} alt={podcast.title} />
                <h3>{podcast.title}</h3>
                <p>{podcast.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No podcasts available.</p>
      )}
    </div>
  );
};

export default PodcastList;
