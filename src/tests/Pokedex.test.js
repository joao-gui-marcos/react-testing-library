import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
  renderWithRouter(<App />);
  const encounteredText = screen.getByRole('heading', { name: /Encountered pokémons/i });
  expect(encounteredText).toBeInTheDocument();
});

test('Teste se é exibido o próximo pokémon da lista quando o botão é clicado', () => {
  renderWithRouter(<App />);
  const nextButton = screen.getByRole('button', { name: /próximo pokémon/i });
  expect(nextButton).toBeInTheDocument();
  expect(nextButton).toHaveTextContent(/próximo pokémon/i);
  userEvent.click(nextButton);
  expect(screen.getByText('Charmander')).toBeInTheDocument();
  const fullList = 8;
  for (let i = 0; i < fullList; i += 1) {
    userEvent.click(nextButton);
  }
  expect(screen.getByText('Pikachu')).toBeInTheDocument();
});

test('Teste se é mostrado apenas um pokémon por vez', () => {
  renderWithRouter(<App />);
  expect(screen.getByText('Pikachu')).toBeInTheDocument();
  expect(screen.queryByText('Charmander')).not.toBeInTheDocument();
  expect(screen.queryByText('Snorlax')).not.toBeInTheDocument();
});

test('Teste se a Pokédex tem os botões de filtro', () => {
  renderWithRouter(<App />);
  const typeButtons = screen.getAllByTestId('pokemon-type-button');
  const numberOfButtons = 7;
  expect(typeButtons).toHaveLength(numberOfButtons);
  expect(typeButtons[0]).toHaveTextContent('Electric');
  expect(typeButtons[1]).toHaveTextContent('Fire');
  expect(typeButtons[2]).toHaveTextContent('Bug');
  expect(typeButtons[3]).toHaveTextContent('Poison');
  expect(typeButtons[4]).toHaveTextContent('Psychic');
  expect(typeButtons[5]).toHaveTextContent('Normal');
  expect(typeButtons[6]).toHaveTextContent('Dragon');
  userEvent.click(typeButtons[1]);
  expect(screen.getByText('Charmander')).toBeInTheDocument();
  const nextButton = screen.getByRole('button', { name: /próximo pokémon/i });
  expect(nextButton).toBeInTheDocument();
  expect(nextButton).toHaveTextContent('Próximo pokémon');
  userEvent.click(nextButton);
  expect(screen.queryByText('Charmander')).not.toBeInTheDocument();
  expect(screen.getByText('Rapidash')).toBeInTheDocument();
  const allButton = screen.getByRole('button', { name: 'All' });
  expect(allButton).toBeInTheDocument();
  expect(allButton).toHaveTextContent('All');
});

test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
  renderWithRouter(<App />);
  const allButton = screen.getByRole('button', { name: 'All' });
  expect(allButton).toBeInTheDocument();
  expect(allButton).toHaveTextContent('All');
  const bugButton = screen.getByRole('button', { name: 'Bug' });
  userEvent.click(bugButton);
  expect(screen.getByText('Caterpie')).toBeInTheDocument();
  userEvent.click(allButton);
  expect(screen.queryByText('Caterpie')).not.toBeInTheDocument();
  const pokemonList = [];
  const nextButton = screen.getByRole('button', { name: /próximo pokémon/i });
  expect(nextButton).toBeInTheDocument();
  expect(nextButton).toHaveTextContent('Próximo pokémon');
  const fullList = 9;
  for (let i = 0; i < fullList; i += 1) {
    pokemonList.push(screen.getByText('More details'));
    userEvent.click(nextButton);
  }
  expect(pokemonList).toHaveLength(fullList);
});
