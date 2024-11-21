import React from "react";

const PlaylistCard = ({ playlist, onRemove }) => {
  return (
    <div className="playlist-card">
      <h3>{playlist.name}</h3>
      <button onClick={() => onRemove(playlist.id)}>Remove</button>
    </div>
  );
};

export default PlaylistCard;
