import React from 'react';
import styles from './header-notification.module.scss';

export function HeaderNotification({ notificationText }) {
  return (
    <div className={styles["header-notification"]}>
      <span>
        {notificationText}
        <a href="/">Learn More</a>
      </span>
      <div className={styles["close"]}>X</div>
    </div>
  );
}
