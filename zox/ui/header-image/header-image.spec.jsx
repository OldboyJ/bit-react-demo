import React from 'react';
import { render } from '@testing-library/react';
import { ZoxHeaderImg } from './header-image.composition';


it('should render correctly', () => {
  const rendered = render(<ZoxHeaderImg />);
  expect(rendered).toBeTruthy();
});

