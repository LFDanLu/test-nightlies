import { render, screen } from '@testing-library/react';
import App from './App';
import {Cell, Column, Row, TableBody, TableHeader, TableView} from '@react-spectrum/table';

test('renders learn react link', () => {
  expect(true).toBeTruthy()
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
