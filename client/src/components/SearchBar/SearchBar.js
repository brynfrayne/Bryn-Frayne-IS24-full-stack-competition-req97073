import { useEffect, useState } from 'react';

function SearchBar({ handleProductSearch, fetchData, failedSearch, setFailedSearch }) {
  const [position, setPosition] = useState('Any');
  const [searchQuery, setSearchQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);

  useEffect(() => {
    let timeoutId;

    // If the search failed, show the no results message for 2 seconds
    if (failedSearch) {
      setShowNoResultsMessage(true);
      timeoutId = setTimeout(() => {
        // After 2 seconds, set the failedSearch state to false
        setFailedSearch(false);
      }, 2000);
    } else {
      // After failedSearch is set to false, hide the no results message
      setShowNoResultsMessage(false);
    }

    return () => clearTimeout(timeoutId);
  }, [failedSearch, setFailedSearch]);

  // Function to handle the search button click
  const onSubmit = (event) => {
    event.preventDefault();
    setSearched(true);
    handleProductSearch(searchQuery, position);
  };

  // clears the state of the search bar after clicking the back button & fetches all products
  const handleClearSearch = () => {
    setPosition('Any');
    setSearchQuery('');
    setSearched(false);
    fetchData();
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
            placeholder="Search for an individual"
            value={searchQuery}
            className="form-control w-100"
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>
        <div className="col-sm-4 px-0">
        {searched && (
            <button type="button" className="btn btn-secondary w-100 my-3" onClick={handleClearSearch}>
              Back
            </button>
          )}
          <button type="submit" className="btn btn-primary w-100" onClick={onSubmit}>
            Search
          </button>
        </div>
        {showNoResultsMessage && (
          <div className='my-3 alert alert-danger' role="alert">
            No results found.
          </div>
        )}
      </div>
    </form>
  );
}

export default SearchBar;
