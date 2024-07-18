// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// // Mock window.alert
// window.alert = jest.fn();

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// Mock window.alert
window.alert = jest.fn();

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  
  // Use a function for getByText to match the text more flexibly
  const linkElement = getByText((content, element) => {
    // Use element.textContent to check the actual text content
    return element.textContent.includes('learn react');
  });

  expect(linkElement).toBeInTheDocument();
});
