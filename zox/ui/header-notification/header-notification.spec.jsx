import React from 'react';
import { render } from '@testing-library/react';
import { ZoxHeaderNotification } from './header-notification.composition';


it('should render correctly', () => {
  const rendered = render(<ZoxHeaderNotification />);
  expect(rendered).toBeTruthy();
});

