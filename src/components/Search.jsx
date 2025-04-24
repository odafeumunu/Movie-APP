import PropTypes from "prop-types";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div className="search-inner">
        <img src="search.svg" alt="search" />

        <input
          type="text"
          placeholder="Find your favourite movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>
    </div>
  );
};

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.string.isRequired,
};

export default Search;
