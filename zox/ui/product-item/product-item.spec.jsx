import React from 'react';
import { render } from '@testing-library/react';
import { ProductList } from './product-item.composition';


it('should render correctly', () => {
  const rendered = render(<ProductList />);
  expect(rendered).toBeTruthy();
});

