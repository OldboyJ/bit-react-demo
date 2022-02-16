import React from 'react';
import { render } from '@testing-library/react';
import { ZoxMarketingGrid } from './marketing-grid.composition';


it('should render correctly', () => {
  const rendered = render(<ZoxMarketingGrid />);
  expect(rendered).toBeTruthy();
});

