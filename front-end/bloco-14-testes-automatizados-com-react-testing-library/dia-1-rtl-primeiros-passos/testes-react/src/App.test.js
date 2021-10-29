import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo email', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText("Email");
  
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

test('Verificando se existe um botão', () => {
  render(<App />);
  const btns = screen.getAllByRole('button');

  expect(btns).toHaveLength(2);
})
