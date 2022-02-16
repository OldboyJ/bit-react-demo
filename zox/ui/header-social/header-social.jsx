import React from 'react';
import styles from './header-social.module.scss';

export function HeaderSocial() {
  return (
    <section className={styles["top-bar"]}>
      <div className={styles["social"]}>
        <ul className={styles["social-icons"]}>
          <li>
            <a
              href="https://twitter.com/zox"
              title="ZOX on Twitter"
              className="icon-twitter"
            >
              <span className={styles["icon"]} dataIcon="twitter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <g id="twitter">
                    <path d="M95,22.1A37,37,0,0,1,84.4,25a18.51,18.51,0,0,0,8.11-10.2,37.17,37.17,0,0,1-11.73,4.48A18.47,18.47,0,0,0,48.84,31.9a18.8,18.8,0,0,0,.48,4.21,52.42,52.42,0,0,1-38-19.29A18.49,18.49,0,0,0,17,41.47a18.63,18.63,0,0,1-8.36-2.32v.23a18.48,18.48,0,0,0,14.81,18.1,18.58,18.58,0,0,1-4.87.65,18.07,18.07,0,0,1-3.47-.34A18.48,18.48,0,0,0,32.33,70.61,37,37,0,0,1,9.4,78.5,40,40,0,0,1,5,78.25a52.23,52.23,0,0,0,28.3,8.3c34,0,52.53-28.13,52.53-52.52l-.06-2.39A37,37,0,0,0,95,22.1Z"></path>
                  </g>
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/zoxstraps"
              title="ZOX on Facebook"
              className="icon-facebook"
            >
              <span className={styles["icon"]} dataIcon="facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <g id="facebook">
                    <path d="M57,27.73V38H72.83l-2.09,16H57V95H40.45V53.94H26.62V38H40.45V26.15C40.45,12.46,48.83,5,61,5h0a115.36,115.36,0,0,1,12.34.63V19.94H64.92C58.26,19.94,57,23.1,57,27.73Z"></path>
                  </g>
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/zox"
              title="ZOX on Instagram"
              className="icon-instagram"
            >
              <span className={styles["icon"]} dataIcon="instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <g id="instagram">
                    <path d="M73.75,5H26.25A21.27,21.27,0,0,0,5,26.25v47.5A21.27,21.27,0,0,0,26.25,95h47.5A21.27,21.27,0,0,0,95,73.75V26.25A21.27,21.27,0,0,0,73.75,5Zm-8.6,60.13A21.43,21.43,0,1,1,71.44,50,21.4,21.4,0,0,1,65.15,65.13ZM81.9,29.34A7.62,7.62,0,1,1,84.14,24,7.59,7.59,0,0,1,81.9,29.34Z"></path>
                  </g>
                </svg>
              </span>
            </a>
          </li>
        </ul>
        <p className={styles["header_text"]}>
          Over 6 millions positive reminders shared.
        </p>
      </div>
      <div className={styles["header_icons"]}>
        <a className={styles["header_link"]} href="/pages/vip">
          <span className={styles["header_icon"]} dataIcon="zox_gift">
            <img src="//cdn.shopify.com/s/files/1/2031/9599/t/195/assets/gift_icon.png?v=9400088726141584938" alt="" />
          </span>
          <span className={styles["icon-caption"]}>VIP</span>
        </a>
        <a className={styles["header_link"]} href="/">
          <span className={styles["icon header_icon"]} dataIcon="search">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <g id="search">
                <path d="M91.49,89.74,70.6,68.85a37.29,37.29,0,1,0-5.85,4.67L86.23,95ZM14.78,42.24A29.8,29.8,0,1,1,44.58,72,29.84,29.84,0,0,1,14.78,42.24Z"></path>
              </g>
            </svg>
          </span>
          <span className={styles["icon-caption"]}>Search</span>
        </a>
        <div className={`${styles["header_currency-dropdown"]} ${styles["header_link"]}`}>
          <span className={`${styles["icon"]} ${styles["header_icon"]}`} dataIcon="globe">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <g id="rss">
                <g>
                  <g>
                    <path d="M37.5,96.6C27.8,94,19.2,88.4,13,80.9h14.6C30.1,87.4,33.4,92.7,37.5,96.6z"></path>
                    <path d="M65.4,80.9c-2.7,6.3-6.7,12.1-12.7,15.5V80.9H65.4z"></path>
                    <path d="M87,80.9C80.4,88.8,71.3,94.6,60.9,97c4.3-4,7.8-9.4,10.3-16.1H87z"></path>
                    <path d="M98.1,52.7c-0.5,8.3-3,16.1-7.2,22.7H73.1c2.9-10.2,3.1-19.5,3.2-21c0,0,0,0,0,0c0,0,0,0,0,0v-0.1c0-0.5,0-1.1,0-1.6H98.1z"></path>
                    <path d="M70.9,52.7c0,0.5,0,1,0,1.5v0.1c0,0.2-0.1,10.4-3.4,21.1H52.7V52.7H70.9z"></path>
                    <path d="M25.8,75.5H9c-4.2-6.7-6.7-14.4-7.2-22.7h20.7c0,0.5,0,1,0,1.6C22.6,54.7,22.7,64.5,25.8,75.5z"></path>
                    <path d="M25.7,24.6c-1.8,6.2-3,13.6-3.2,22.7H1.9c0.5-8.3,3-16.1,7.2-22.7H25.7z"></path>
                    <path d="M70.9,47.3H52.7V24.6h14.8C69.3,30.5,70.6,38,70.9,47.3z"></path>
                    <path d="M98.1,47.3H76.3c-0.2-9.1-1.4-16.6-3.2-22.7h17.8C95.1,31.3,97.7,39,98.1,47.3z"></path>
                    <path d="M87,19.2H71.3c-3-7.6-6.9-12.7-10.6-16.2C71.2,5.4,80.3,11.2,87,19.2z"></path>
                    <path d="M65.4,19.2H52.7V3.7C56.4,5.9,61.5,10.4,65.4,19.2z"></path>
                    <path d="M37.8,3.4c-3.6,3.4-7.3,8.4-10.2,15.8H13C19.3,11.6,27.9,5.9,37.8,3.4z"></path>
                  </g>
                  <g>
                    <path d="M47.3,80.9V97c-6.6-3.3-11-9.4-13.8-16.1H47.3z"></path>
                    <path d="M47.3,52.7v22.7H31.5c-3.3-10.7-3.4-21-3.4-21.2c0-0.5,0-1,0-1.5H47.3z"></path>
                    <path d="M47.3,24.6v22.7H28c0.2-9.3,1.5-16.8,3.4-22.7H47.3z"></path>
                    <path d="M47.3,3.1v16.1H33.4C37.8,9.4,43.6,5,47.3,3.1z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </span>
          <span className={styles["icon-caption"]}>
            <form
              method="post"
              action="/cart/update"
              id="currency_form"
              accept-charset="UTF-8"
              className="shopify-currency-form"
              enctype="multipart/form-data"
            >
              <input type="hidden" name="form_type" value="currency" />
              <input type="hidden" name="utf8" value="✓" />
              <input type="hidden" name="return_to" value="/" />
              <select
                className="currencies-dropdown"
                name="currency"
                id="currency-convertor"
              >
                <option>EUR</option>
                <option selected="true">USD</option>
              </select>
            </form>
          </span>
        </div>
        <a href="/account/login" className={styles["header_link"]}>
          <span className={`{${styles.icon} ${styles.header_icon}}`} dataIcon="avatar">
            {" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <g id="avatar">
                <circle cx="50" cy="43.4" r="17.16"></circle>
                <path d="M50,4A46,46,0,1,0,96,50,46.06,46.06,0,0,0,50,4ZM77.63,76.76a31.67,31.67,0,0,0-55.27,0A38.15,38.15,0,0,1,11.51,50,38.49,38.49,0,1,1,77.63,76.76Z"></path>
              </g>
            </svg>
          </span>
          <span className={styles["icon-caption"]}>Login</span>
        </a>
        <a
          href="#swym-wishlist"
          className={styles["header_link"]}
          data-swym-loaded="true"
        >
          <i
            aria-hidden="true"
            focusable="false"
            role="presentation"
            className={styles.icon}
          ></i>
        </a>
        <div className={styles["header-cart"]} data-ajax-cart-trigger="">
          <a className={styles["header_link"]} href="/cart">
            <span className={`${styles["header-cart_icon"]} cart-btn`}>
              <span className={`${styles["icon"]} ${styles["header_icon"]}`} dataIcon="bag">
                <svg
                  height="100px"
                  width="100px"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 500 500"
                  enable-background="new 0 0 500 500"
                  xmlSpace="preserve"
                >
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
              </span>
              <span className={styles["header-cart_count"]} dataBind="itemCount">
                0
              </span>
            </span>
            <span className={`${styles["header-cart_caption"]} ${styles["icon-caption"]}`}>Cart</span>
          </a>
        </div>
      </div>
    </section>
  );
}
