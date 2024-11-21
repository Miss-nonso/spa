import React, { useState, useEffect } from "react";
import SearchBar from "../components/Searchbar";
import SongCard from "../components/SongCard";

const SearchResults = ({ onAddToPlaylist }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch Spotify token
  const fetchToken = async () => {
    const client_id = `${process.env.REACT_APP_CLIENT_ID}`;
    const client_secret = `${process.env.REACT_APP_CLIENT_SECRET}`;
    const credentials = btoa(`${client_id}:${client_secret}`);

    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        grant_type: "client_credentials"
      })
    });

    if (response.ok) {
      const data = await response.json();
      return data.access_token;
    } else {
      console.error("Failed to fetch token:", response.status);
      return null;
    }
  };

  // Fetch search results
  const fetchSearchResults = async (query) => {
    setIsLoading(true);
    const AuthKey = await fetchToken();
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${AuthKey}`
        }
      }
    );

    if (response.ok) {
      const data = await response.json();
      setResults(data.tracks.items);
    } else {
      console.error("Failed to fetch search results");
    }
    setIsLoading(false);
  };

  // Fetch default songs when component mounts
  async function fetchDefaultSongs() {
    setIsLoading(true);
    const AuthKey = await fetchToken();
    const response = await fetch(
      "https://api.spotify.com/v1/browse/new-releases?limit=10",
      {
        headers: {
          Authorization: `Bearer ${AuthKey}`
        }
      }
    );

    if (response.ok) {
      const data = await response.json();

      const defaultSongs = data.albums.items.map((album) => ({
        id: album.id,
        name: album.name,
        artist: album.artists[0]?.name || "Unknown Artist",
        image: album.images[0]?.url || ""
      }));
      setResults(defaultSongs);
    } else {
      console.error("Failed to fetch default songs");
    }
    setIsLoading(false);
  }

  // UseEffect to load default content
  useEffect(() => {
    fetchDefaultSongs();
  }, []);

  return (
    <div className="search-results">
      <SearchBar onSearch={fetchSearchResults} />
      <div className="results-grid">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          results.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              onViewDetails={onAddToPlaylist}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResults;
