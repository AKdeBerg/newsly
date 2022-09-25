import { ARTICLE_PER_PAGE } from './articleHelper';
import { showArticles } from './articleHelper';

export const calculateTotalPages = (searchField, news, currentPageFirstArticleNumber) => {
  return searchField.length !== 0
    ? Math.ceil(
        showArticles(searchField, news, currentPageFirstArticleNumber, ARTICLE_PER_PAGE).length / ARTICLE_PER_PAGE
      )
    : Math.ceil(news.length / ARTICLE_PER_PAGE);
};
