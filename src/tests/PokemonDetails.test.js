import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

const pikachuDetailsRoute = '/pokemons/25/';

test('Teste se as informações detalhadas são mostradas na tela', () => {
  renderWithRouter(<App />);
  const { history } = renderWithRouter(<App />);
  history.push(pikachuDetailsRoute);
  const text = screen.getByText('Pikachu Details');
  expect(text).toBeInTheDocument();
  const summary = screen.getByRole('heading', { name: /Summary/i });
  expect(summary).toBeInTheDocument();
  const summaryText = screen.getByText(/roasts hard berries with electricity/i);
  expect(summaryText).toBeInTheDocument();
});

test('Teste se existe na página uma seção com os mapas contendo as localizações', () => {
  renderWithRouter(<App />);
  const { history } = renderWithRouter(<App />);
  history.push(pikachuDetailsRoute);
  const locations = screen.getByRole('heading', { name: /Game locations of Pikachu/i });
  expect(locations).toBeInTheDocument();
  const kanto = screen.getByText(/Kanto Viridian Forest/i);
  expect(kanto).toBeInTheDocument();
  const map = screen.getAllByAltText(/Pikachu location/i);
  expect(map[0]).toBeInTheDocument();
  expect(map[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  expect(map[1]).toBeInTheDocument();
  expect(map[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
});

test('Teste se o usuário pode favoritar um pokémon através da página de detalhes', () => {
  renderWithRouter(<App />);
  const { history } = renderWithRouter(<App />);
  history.push('/pokemons/25/');
  const favoriteInput = screen.getByRole('checkbox', { name: /Pokémon favoritado/i });
  expect(favoriteInput).toBeInTheDocument();
  userEvent.click(favoriteInput);
  const star = screen.getByAltText(/Pikachu is marked as favorite/i);
  expect(star).toBeInTheDocument();
  expect(star).toHaveAttribute('src', '/star-icon.svg');
  userEvent.click(favoriteInput);
  expect(star).not.toBeInTheDocument();
});
// end
