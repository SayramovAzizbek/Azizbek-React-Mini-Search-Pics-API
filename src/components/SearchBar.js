import "./SearchBar.css";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    
    onSubmit(term);
  };

  const handleChange = (evt) => {
    setTerm(evt.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;
