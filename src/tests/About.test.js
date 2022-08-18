import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import { About } from '../pages';

test('Teste se a página contém as informações sobre a Pokédex', () => {
  renderWithRouter(<About />);
  const pokedexTitle = screen.getByRole('heading', { name: /About Pokédex/i });
  expect(pokedexTitle).toBeInTheDocument();
});

test('Teste se a página contém a imagem de uma Pokédex', () => {
  renderWithRouter(<About />);
  const pokedexImage = screen.getByAltText('Pokédex');
  expect(pokedexImage).toBeInTheDocument();
  expect(pokedexImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
