import { useState } from 'react';
import { Button } from 'react-bootstrap';

function SearchBar({ handleProductSearch }) {
  const [position, setPosition] = useState('Any');
  const [searchQuery, setSearchQuery] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('Search for', searchQuery, 'in', position);
    handleProductSearch(searchQuery, position);
  };

  return (
    <form onSubmit={onSubmit} className="w-25 mx-auto mb-3">
      <div className="mb-3 row align-items-center" id="formPosition">
        <label htmlFor="positionSelect" className="col-sm-4 text-end">Search by position:</label>
        <div className="col-sm-8">
          <select
            id="positionSelect"
            aria-label="Select developer or scrum master"
            value={position}
            className="form-select w-auto"
            onChange={(event) => setPosition(event.target.value)}
          >
            <option value="">Any</option>
            <option value="Developer">Developer</option>
            <option value="Scrum Master">Scrum Master</option>
          </select>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-sm-8 pe-2">
          <input
            type="search"
            placeholder="Search for individual"
            value={searchQuery}
            className="form-control w-100"
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>
        <div className="col-sm-4 px-0">
          <button type="submit" className="btn btn-primary w-100" onClick={onSubmit}>
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
