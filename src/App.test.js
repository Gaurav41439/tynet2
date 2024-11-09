import { render, screen } from '@testing-library/react';
import '../src/assets/fonts/font-awesome.css'
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
