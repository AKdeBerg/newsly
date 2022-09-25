import { useState, useEffect } from 'react';
import * as api from '../api/topNews';
import * as actions from '../store/actions/actions';
import { useDispatch } from 'react-redux';
import SearchBar from '../components/searchbar';
import { ARTICLE_PER_PAGE } from '../helpers/articleHelper';
import { calculateTotalPages } from '../helpers/paginationHelper';
import { Paginate } from '../components/paginate';
import { NewsList } from '../components/newsList';

export default function US({ scienceNewsProp }) {
  const [searchField, setSearchField] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadScienceDataSuccess(scienceNewsProp.slice(0, 48)));
  }, []);

  const scienceNews = scienceNewsProp.slice(0, 48);

  // pagination
  const currentPageFirstArticleNumber = pageNumber * ARTICLE_PER_PAGE;
  const totalPages = calculateTotalPages(searchField, scienceNews, currentPageFirstArticleNumber);
  const updatePageNumber = ({ selected }) => {
    setPageNumber(selected);
  };

  // searching
  const handleSearch = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <section className="bg-dark pt-5 pb-5 shadow-sm">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-uppercase border-bottom mb-4 primary text-light">Top Science News</h2>
            <SearchBar handleSearch={(e) => handleSearch(e)} />
          </div>
        </div>
        <div className="row">
          {scienceNews.length === 0 ? (
            <div></div>
          ) : (
            <NewsList
              searchField={searchField}
              news={scienceNews}
              currentPageFirstArticleNumber={currentPageFirstArticleNumber}
            />
          )}
        </div>
      </div>
      <Paginate updatePageNumber={({ selected }) => updatePageNumber({ selected })} totalPages={totalPages} />
    </section>
  );
}

// pre render and cache the request
export async function getStaticProps() {
  const res = await api.getScienceTopStories();
  const scienceNews = res.data.results;

  return {
    props: {
      scienceNewsProp: scienceNews,
    },
    revalidate: 15 * 60, // 15 min cache
  };
}
