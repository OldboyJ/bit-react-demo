import React from 'react';
import styles from './header-image.module.scss';

export function HeaderImage({ text, subText, linkText, imgSrc }) {
  return (
    <section className={styles["header-image"]}>
      <div className={styles["heading"]}>
        <h1>{text}</h1>
        <span>{`(${subText})`}</span>

        <span className={styles["heading-cta"]}>{linkText}</span>
      </div>
      <img src={imgSrc} />
    </section>
  );
}
