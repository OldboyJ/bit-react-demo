import React from 'react';
import { render } from '@testing-library/react';
import { ZoxFooter } from './footer.composition';


it('should render with the correct text', () => {
  const rendered = render(<ZoxFooter />);
  expect(rendered).toBeTruthy();
});

