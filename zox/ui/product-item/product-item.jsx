import React from 'react';
import styles from './product-item.module.scss';

export function ProductItem({ imgUrl, productTitle, productPrice }) {
  return (
    <div className={styles["product-item"]}>
      <a href="/" className={styles["product-link"]}>
        <img src={imgUrl} alt="" />
        <span className={styles["product-item__tag"]}></span>
        <h5>{productTitle}</h5>
        <span className={styles["product-details"]}>
          <span className={styles["product-price"]}>${productPrice}</span>
          <span className={styles["product-cta"]}>Add to cart</span>
        </span>
      </a>
    </div>
  );
}
