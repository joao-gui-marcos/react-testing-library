import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemons } from '../pages';
import App from '../App';

test('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
  renderWithRouter(<FavoritePokemons />);
  const noFavoriteText = screen.getByText('No favorite pokemon found');
  expect(noFavoriteText).toBeInTheDocument();
});

test('Teste se são exibidos todos os cards de pokémons favoritados', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/pokemons/25/');
  const favoriteInput = screen.getByRole('checkbox', { name: /Pokémon favoritado/i });
  expect(favoriteInput).toBeInTheDocument();
  userEvent.click(favoriteInput);
  history.push('/favorites/');
  const pikachu = screen.getByText('Pikachu');
  expect(pikachu).toBeInTheDocument();
});
