import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders input field', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Submit/);
  expect(linkElement).toBeInTheDocument();
});
