import { expect, test, describe, it } from 'vitest';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

test('hello world test', () => {
  document.body.innerHTML = '<button type="button">Click me</button>';
  const button = screen.getByText('Click me');
  userEvent.click(button);
  expect(button).toBeInTheDocument();
});

test('button is clickable and changes text', async () => {
  document.body.innerHTML = '<button type="button" id="btn">Click me</button>';
  const button = screen.getByText('Click me');
  button.addEventListener('click', () => {
    button.textContent = 'Clicked!';
  });
  await userEvent.click(button);
  expect(button.textContent).toBe('Clicked!');
});

test('button is not found if text does not match', () => {
  document.body.innerHTML = '<button type="button">Hello</button>';
  expect(() => screen.getByText('Click me')).toThrow();
});

test('multiple buttons can be found', () => {
  document.body.innerHTML = `
    <button type="button">First</button>
    <button type="button">Second</button>
  `;
  const firstButton = screen.getByText('First');
  const secondButton = screen.getByText('Second');
  expect(firstButton).not.toBeNull();
  expect(secondButton).not.toBeNull();
});