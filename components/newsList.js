import React from 'react';
import { NewsCard } from './newsCard';
import { showArticles } from '../helpers/articleHelper';

export function NewsList({ searchField, news, currentPageFirstArticleNumber }) {
  return showArticles(searchField, news, currentPageFirstArticleNumber).map((element, idx) => {
    return (
      element.multimedia && (
        <NewsCard
          key={idx}
          url={element.multimedia[1].url}
          title={element.title}
          abstract={element.abstract}
          fullLink={element.url}
        />
      )
    );
  });
}

export default NewsList;
