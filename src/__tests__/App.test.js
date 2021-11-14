import { render, screen } from '@testing-library/react';
import TainanTourism from '../components/TainanTourism';

test('renders learn react link', () => {
  render(<TainanTourism />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
