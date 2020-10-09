import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Date string - currently at the header', () => {
  const { getByText } = render(<App />);
  const mockDateString = new Date(Date.now()).toDateString();
  const element = getByText(mockDateString);
  expect(element).toBeInTheDocument();
});
