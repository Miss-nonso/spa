import React from "react";

const SongDetails = ({ song }) => {
  if (!song) return <div>Select a song to view details</div>;

  return (
    <div className="song-details">
      <h2>{song.name}</h2>
      <p>Artist(s): {song.artists.map((artist) => artist.name).join(", ")}</p>
      <img src={song.album.images[0]?.url} alt={song.name} />
      <p>Album: {song.album.name}</p>
    </div>
  );
};

export default SongDetails;
