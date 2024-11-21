import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import SongDetails from "./pages/SongDetails";
import Playlist from "./pages/Playlist";

const App = () => {
  const [playlist, setPlaylist] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);

  const addToPlaylist = (song) => {
    setPlaylist((prev) => [...prev, song]);
  };

  const removeFromPlaylist = (id) => {
    setPlaylist((prev) => prev.filter((song) => song.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search"
          element={<SearchResults onAddToPlaylist={addToPlaylist} />}
        />
        <Route path="/song" element={<SongDetails song={selectedSong} />} />
        <Route
          path="/playlist"
          element={
            <Playlist playlist={playlist} onRemove={removeFromPlaylist} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
