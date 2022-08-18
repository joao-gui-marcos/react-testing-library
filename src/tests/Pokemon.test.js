import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se é renderizado um card com as informações de determinado pokémon', () => {
  renderWithRouter(<App />);
  const name = screen.getByTestId('pokemon-name');
  const type = screen.getByTestId('pokemon-type');
  const weight = screen.getByTestId('pokemon-weight');
  const image = screen.getByAltText(/Pikachu sprite/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  expect(name).toBeInTheDocument();
  expect(type).toBeInTheDocument();
  expect(weight).toBeInTheDocument();
  expect(name).toHaveTextContent('Pikachu');
  expect(type).toHaveTextContent('Electric');
  expect(weight).toHaveTextContent('Average weight: 6.0 kg');
});

test('Teste se o card do pokémon indicado na Pokédex contém um link de navegação', () => {
  const { history } = renderWithRouter(<App />);
  const link = screen.getByRole('link', { name: 'More details' });
  expect(link).toBeInTheDocument();
  userEvent.click(link);
  const { pathname } = history.location;
  expect(pathname).toBe('/pokemons/25');
});

test('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/pokemons/25/');
  const favoriteInput = screen.getByRole('checkbox', { name: /Pokémon favoritado/i });
  expect(favoriteInput).toBeInTheDocument();
  userEvent.click(favoriteInput);
  history.push('/');
  const pikachu = screen.getByText('Pikachu');
  expect(pikachu).toBeInTheDocument();
  const star = screen.getByAltText(/Pikachu is marked as favorite/i);
  expect(star).toBeInTheDocument();
  expect(star).toHaveAttribute('src', '/star-icon.svg');
});
