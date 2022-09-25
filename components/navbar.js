import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand'>Newsly</a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link href='/'>
                <a className='nav-link active' aria-current='page'>
                  Home
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/us'>
                <a className='nav-link active' aria-current='page'>
                  US
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/world'>
                <a className='nav-link active' aria-current='page'>
                  World
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/science'>
                <a className='nav-link active' aria-current='page'>
                  Science
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/arts'>
                <a className='nav-link active' aria-current='page'>
                  Arts
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
