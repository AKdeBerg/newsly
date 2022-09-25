import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function NewsCard(props) {
  const myLoader = ({ src }) => {
    return src;
  };

  return (
    <div className="col-lg-4 mb-3 d-flex align-items-stretch">
      <div className="card mb-5 shadow-sm">
        <Image
          loader={myLoader}
          src={props?.url}
          alt="Picture of the author"
          height={200}
          width={200}
          className="img-fluid"
        />
        <div className="card-body d-flex flex-column">
          <div className="card-title">
            <h5>{props?.title}</h5>
          </div>
          <div className="card-text mb-4">
            <p>{props?.abstract?.substring(0, 35)}.....</p>
          </div>
          <Link href={props?.fullLink}>
            <a target="_blank" className="btn btn-primary mt-auto align-self-start">
              Read More
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
