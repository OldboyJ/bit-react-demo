import React from 'react';
import styles from './marketing-grid.module.scss';

export function MarketingUnit({ heading, subHeading, buttonText, buttonColor }) {
  return (
    <div className={styles.unit}>
      <div className={`${styles["call-out"]} ${styles[buttonColor]}`}>
        <h2>{heading}</h2>
        {subHeading ? <p>{subHeading}</p> : null}
      </div>
      <div className={`${styles.cta} ${styles[buttonColor]}`}>
        <a href="/" className={styles.button}>{buttonText}</a>
      </div>
    </div>
  );
}
