import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

test('Teste se a página contém um h2 com o texto Page requested not found', () => {
  renderWithRouter(<NotFound />);
  const notFoundText = screen.getByRole('heading', { name: /Page requested not found/i });
  expect(notFoundText).toBeInTheDocument();
});

test('Teste se a página mostra o gif', () => {
  renderWithRouter(<NotFound />);
  const gif = screen.getByAltText(/Pikachu crying because the page requested was not/i);
  expect(gif).toBeInTheDocument();
  expect(gif).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
