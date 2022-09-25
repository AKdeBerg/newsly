export const ARTICLE_PER_PAGE = 12;

export function showArticles(searchField, news, currentPageFirstArticleNumber) {
  if (searchField.length !== 0) {
    return news
      .filter((eachNews) => {
        return eachNews.title.toLowerCase().includes(searchField.toLowerCase());
      })
      .slice(currentPageFirstArticleNumber, currentPageFirstArticleNumber + ARTICLE_PER_PAGE);
  } else {
    return news.slice(currentPageFirstArticleNumber, currentPageFirstArticleNumber + ARTICLE_PER_PAGE);
  }
}
