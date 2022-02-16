import React from 'react';
import { MarketingUnit } from './marketing-grid';
import styles from './marketing-grid.module.scss';
import { marketingData } from './marketingData'

export const ZoxMarketingGrid = () => (
  <div className={styles["marketing-grid"]}>
    {marketingData.map((box, i) => {
      return (
        <MarketingUnit
          heading={box.heading}
          subheading={box.subHeading}
          buttonText={box.buttonText}
          buttonColor={box.buttonColor}
        />
      )
    })
    }
  </div>
);
