import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  renderWithRouter(<App />);
  const homeLink = screen.getByRole('link', { name: 'Home' });
  expect(homeLink).toBeInTheDocument();
  const aboutLink = screen.getByRole('link', { name: 'About' });
  expect(aboutLink).toBeInTheDocument();
  const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
  expect(favoriteLink).toBeInTheDocument();
});

test('Teste se a aplicação é redirecionada para a página inicial', () => {
  const { history } = renderWithRouter(<App />);
  const homeLink = screen.getByRole('link', { name: 'Home' });
  expect(homeLink).toBeInTheDocument();
  userEvent.click(homeLink);
  const { pathname } = history.location;
  expect(pathname).toBe('/');
});

test('Teste se a aplicação é redirecionada para a página de About', () => {
  const { history } = renderWithRouter(<App />);
  const aboutLink = screen.getByRole('link', { name: 'About' });
  expect(aboutLink).toBeInTheDocument();
  userEvent.click(aboutLink);
  const { pathname } = history.location;
  expect(pathname).toBe('/about');
});

test('Teste se a aplicação é redirecionada para a página de Pokémons Favoritados', () => {
  const { history } = renderWithRouter(<App />);
  const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
  expect(favoriteLink).toBeInTheDocument();
  userEvent.click(favoriteLink);
  const { pathname } = history.location;
  expect(pathname).toBe('/favorites');
});

test('Teste se a aplicação é redirecionada para a página Not Found', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/pagina/que-nao-existe/');
  const notFound = screen.getByRole('heading', { name: /Page requested not found/i });
  expect(notFound).toBeInTheDocument();
});
