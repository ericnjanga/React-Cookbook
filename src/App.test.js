import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './ThemeContext';
import App from './App';

test('renders "React Patterns" heading', () => {
  render(<ThemeProvider><App /></ThemeProvider>);
  // Find the <h1> element by its role (heading) and text content
  const heading = screen.getByRole('heading', { name: /React Patterns/i });
  expect(heading).toBeInTheDocument();
});
