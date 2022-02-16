import React from 'react';
import { render } from '@testing-library/react';
import { ZoxHeaderNav } from './header-nav.composition';


it('should render correctly', () => {
  const rendered = render(<ZoxHeaderNav />);
  expect(rendered).toBeTruthy();
});

