import React from "react";

export default function MediaCard({ media }) {
  return (
    <div className="media-card">
      <img
        src={"https://image.tmdb.org/t/p/original" + media.poster_path}
        alt=""
      />
      <h3>{media.title}</h3>
      <p>{media.overview}</p>
    </div>
  );
}
