import React from "react";
import PlaylistCard from "../components/PlaylistCard";

const Playlist = ({ playlist, onRemove }) => {
  return (
    <div className="playlist">
      <h1>Your Playlist</h1>
      {playlist.map((song) => (
        <PlaylistCard key={song.id} playlist={song} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Playlist;
