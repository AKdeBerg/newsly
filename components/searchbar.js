import React from 'react';

function SearchBar({ handleSearch }) {
  return (
    <div class="mt-0 mb-5">
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput"
        placeholder="Search Articles by Headlines"
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
