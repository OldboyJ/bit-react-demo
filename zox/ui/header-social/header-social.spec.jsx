import React from 'react';
import { render } from '@testing-library/react';
import { ZoxHeaderSocial } from './header-social.composition';


it('should render all elements correctly', () => {
  const rendered = render(<ZoxHeaderSocial />);
  expect(rendered).toBeTruthy();
});

