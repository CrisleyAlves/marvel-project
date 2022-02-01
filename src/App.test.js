import { render, screen } from '@testing-library/react';
import App from './App';

test('should find hello text in the page', () => {
  render(<App />);
  screen.getByText(/hello/i);
});
