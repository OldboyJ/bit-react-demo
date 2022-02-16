import React from 'react';
import './header-nav.scss'

export function HeaderNav() {
  return (
    <section className="middle-bar">
      <a className="header_logo header_logo-desktop header_link primary-logo"
        href="https://zox.la"
        title="ZOX">
        <img src="//cdn.shopify.com/s/files/1/2031/9599/t/195/assets/zoxlogo.svg?v=13232374390935147274" alt="" />
      </a>
      <nav id="nav-js">
        <div className="nav-left">
          <a className="nav-item" href="/collections/new-releases" className="navbar-link header_link is-arrowless">
            New Releases</a>
          <div className="nav-item nav-has-sub" href="#">
            <span>Shop +</span>
            <div className="nav-sub six-col">
              <div className="nav-group">
                <h2>Bracelets</h2>
                <ul>
                  <li>Original Zox</li>
                  <li>Zox for Kids</li>
                  <li>Zox mystory packs</li>
                  <li>Metlets</li>
                  <li>Imperials</li>
                  <li>Monster Month</li>
                </ul>
              </div>
              <div className="nav-group">
                <h2>Accessories</h2>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="nav-group">
                <h2>Clothing</h2>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="nav-group">
                <h2>Bags</h2>
              </div>
              <div className="nav-group">
                <h2>Causes</h2>
              </div>
              <div className="nav-group">
                <h2>Memberships</h2>
              </div>
            </div>
          </div>
          <div className="nav-item nav-has-sub" href="#">
            <span>Brand +</span>
            <div className="nav-sub">
              <div className="nav-group">
                <h2>About</h2>
              </div>
              <div className="nav-group">
                <h2>Collecting</h2>
              </div>
              <div className="nav-group">
                <h2>Community</h2>
              </div>
              <div className="nav-group">
                <h2>Impact</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-right">
          <a className="nav-item" href="/pages/contact-us" className="navbar-link header_link  is-arrowless">
            Contact</a>
          <a className="nav-item" href="/pages/vip" className="navbar-link header_link  is-arrowless">
            Loyalty</a>
        </div>
      </nav>
      <div className="header_mobile-nav">
        <div id="mobile-menu-trigger-js" className="header_mobile-menu-trigger">
          <div id="mobile-menu-open" className="open"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <title>menu</title>
            <g id="menu">
              <rect x="5" y="12" width="90" height="8"></rect>
              <rect x="5" y="46" width="90" height="8"></rect>
              <rect x="5" y="80" width="90" height="8"></rect>
            </g>
          </svg>
          </div>
          <div id="mobile-menu-close" className="close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <g id="x">
                <polygon points="95 10.32 89.68 5 50 44.68 10.32 5 5 10.32 44.68 50 5 89.68 10.32 95 50 55.32 89.68 95 95 89.68 55.32 50 95 10.32"></polygon>
              </g>
            </svg>
          </div>
        </div>
        <a className="header_logo header_logo-mobile header_link primary-logo" href="https://zox.la" title="ZOX"> <img src="//cdn.shopify.com/s/files/1/2031/9599/t/195/assets/zoxlogo.svg?v=13232374390935147274" alt="" /></a>
        <div className="header_mobile-search">
          <svg height="100px" width="100px" fill="#000000" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 120 120" xmlSpace="preserve">
            <g>
              <g>
                <g>
                  <path d="M91.49,89.74,70.6,68.85a37.29,37.29,0,1,0-5.85,4.67L86.23,95ZM14.78,42.24A29.8,29.8,0,1,1,44.58,72,29.84,29.84,0,0,1,14.78,42.24Z"></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="header_mobile-whishlist">
          <i aria-hidden="true" focusable="false" role="presentation" className="icon icon-swym-wishlist"></i>
        </div>
        <div className="header_mobile-cart">
          <svg height="100px" width="100px" fill="#000000" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xmlSpace="preserve">
            <g>
              <g>
                <g>
                  <path d="M401.4,436.4c-34.3,0-68.5,0-102.8,0c-54.2,0-108.4,0-162.6,0c-12.5,0-25,0-37.5,0c3.3,3.3,6.7,6.7,10,10     c0-29.1,0-58.1,0-87.2c0-45.9,0-91.9,0-137.8c0-10.6,0-21.3,0-31.9c-3.3,3.3-6.7,6.7-10,10c34.3,0,68.5,0,102.8,0     c54.2,0,108.4,0,162.6,0c12.5,0,25,0,37.5,0c-3.3-3.3-6.7-6.7-10-10c0,29.1,0,58.1,0,87.2c0,45.9,0,91.9,0,137.8     c0,10.6,0,21.3,0,31.9c0,12.9,20,12.9,20,0c0-29.1,0-58.1,0-87.2c0-45.9,0-91.9,0-137.8c0-10.6,0-21.3,0-31.9c0-5.4-4.6-10-10-10     c-34.3,0-68.5,0-102.8,0c-54.2,0-108.4,0-162.6,0c-12.5,0-25,0-37.5,0c-5.4,0-10,4.6-10,10c0,29.1,0,58.1,0,87.2     c0,45.9,0,91.9,0,137.8c0,10.6,0,21.3,0,31.9c0,5.4,4.6,10,10,10c34.3,0,68.5,0,102.8,0c54.2,0,108.4,0,162.6,0     c12.5,0,25,0,37.5,0C414.3,456.4,414.3,436.4,401.4,436.4z"></path>
                </g>
              </g>
              <g>
                <g>
                  <path d="M189.8,220.7c0-21,0-42,0-62.9c0-10.5,0-21,0-31.5c0-13.3,3-25.7,10.5-36.9c20.6-30.6,65.6-34.6,91.7-9     c11.7,11.5,17.9,26.9,18.1,43.2c0.1,8.1,0,16.3,0,24.4c0,24.2,0,48.4,0,72.6c0,12.9,20,12.9,20,0c0-22.4,0-44.8,0-67.2     c0-9.7,0-19.5,0-29.2c-0.1-18.8-6.2-36.5-17.9-51.2c-28-35.2-80.8-38.9-114.7-10.3c-16.6,14-26.4,34.9-27.7,56.5     c-0.5,8.1-0.1,16.4-0.1,24.5c0,25.6,0,51.3,0,76.9C169.8,233.5,189.8,233.6,189.8,220.7L189.8,220.7z"></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
