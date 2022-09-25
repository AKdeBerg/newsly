import React from 'react';
import ReactPaginate from 'react-paginate';

export function Paginate({ updatePageNumber, totalPages }) {
  return (
    <div className="container d-flex justify-content-center">
      <ReactPaginate
        breakLabel="..."
        nextLabel=" next "
        previousLabel="prev "
        onPageChange={updatePageNumber}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        renderOnZeroPageCount={null}
        className={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        activeClassName={'page-item active'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
      />
    </div>
  );
}

export default Paginate;
