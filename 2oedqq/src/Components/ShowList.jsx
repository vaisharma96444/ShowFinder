import React, { useState, useEffect } from 'react';
import './ShowList.css';

function ShowList({ onShowSelect }) {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.error(error));
  }, []);

  function handleShowClick(show) {
    onShowSelect(show);
  }

  return (
    <div className="show-list-container">
      <h1>Show List</h1>
      <ul>
        {shows.map(show => (
          <li key={show.show.id} className="show-item" onClick={() => handleShowClick(show)}>
            <div className="show-item-info">
              <h2 className="show-item-title">{show.show.name}</h2>
              <p className="show-item-summary">{show.show.summary}</p>
            </div>
            <button className="show-item-button">View Summary</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowList;
