import React, { useState } from 'react';
import './index.css'

function GoogleSuggestions({ suggestionsList }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  
  const handleSearchInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    
    const filtered = suggestionsList.filter((suggestion) =>
      suggestion.suggestion.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };


  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setFilteredSuggestions([]);
  };

  return (

    <div className="app-container-3">
    <div className="google-suggestions-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        alt="google logo"
        className="google-logo"
      />
      <div className="search-input-suggestions-container">
        <div className="search-input-container">
          <img
            alt="search icon"
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
          />
          <input
            type="search"
            className="search-input"
            placeholder="Search Google"
            onChange={handleSearchInputChange}
            value={searchTerm}
          />
        </div>
        <ul className="suggestions-list">
        {filteredSuggestions.map((suggestion) => (
          <li key={suggestion.id} className="suggestion-item">
            <p className="suggestion-text" onClick={() => handleSuggestionClick(suggestion.suggestion)}>
              {suggestion.suggestion}
            </p>
            <button
              type="button"
              className="arrow-button"
              onClick={() => handleSuggestionClick(suggestion.suggestion)}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
                alt="arrow"
                className="arrow"
              />
            </button>
          </li>
        ))}
      </ul>
     
      </div>
    </div>
  </div>

   
  );








}

export default GoogleSuggestions;
