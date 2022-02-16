import React from 'react';
import { ProductItem } from './product-item';
import { listData } from './listData';
import styles from './product-item.module.scss';

export const ProductList = () => (
  <div className={styles["product-list"]}>
    {listData.map((item, i) => {
      return (
        <ProductItem
          key={i}
          imgUrl={item.imgUrl}
          productTitle={item.title}
          productPrice={item.price}
        />
      );
    })}
  </div>
);
