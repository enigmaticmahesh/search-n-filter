import { useState } from 'react';
import { useUsersContext } from '../contexts/UsersContext';
import useDebounce from '../hooks/useDebounce';

const Search = () => {
  const { setQuery } = useUsersContext();
  const { debounced } = useDebounce();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = (e) => {
    const q = e.target.value;
    setSearchQuery(q);
    debounced(() => {
      setQuery(q);
    });
  };

  return (
    <section
      className="hero-section d-flex justify-content-center align-items-center"
      id="section_1"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto">
            <h1 className="text-white text-center">Search and Filter</h1>

            <h6 className="text-center">
              platform for creatives around the world
            </h6>

            <form
              method="get"
              className="custom-form mt-4 pt-2 mb-lg-0 mb-5"
              role="search"
            >
              <div className="input-group input-group-lg">
                <span
                  className="input-group-text bi-search"
                  id="basic-addon1"
                ></span>

                <input
                  name="keyword"
                  type="search"
                  className="form-control"
                  id="keyword"
                  placeholder="Search Users"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleSearchQuery}
                />

                <button type="submit" className="form-control">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
