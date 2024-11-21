import React from "react";

const SongCard = ({ song, onViewDetails }) => {
  return (
    <div className="song-card">
      <img
        src={song.image || "https://via.placeholder.com/150"}
        alt={song.name}
        className="song-image"
      />
      <div className="song-info">
        <h3 className="song-title">{song.name}</h3>
        <p className="song-artist">{song.artist || "Unknown Artist"}</p>
        <button onClick={() => onViewDetails(song)}>Add to Playlist</button>
      </div>
    </div>
  );
};

export default SongCard;
