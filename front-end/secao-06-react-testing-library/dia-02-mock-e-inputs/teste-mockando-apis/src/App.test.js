// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  const newJoke = {
    id: 'R7UfaahVfFd',
    joke: 'My dog used ... his bike away.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(joke),
  });

  // Outra forma de mock do fetch:
  // global.fetch = jest.fn(() => Promise.resolve({
  //   json: () => Promise.resolve(joke),
  // }));

  // global.fetch = jest.fn(async () => ({
  //   json: async () => joke
  // }));

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);

  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(newJoke),
  });

  const jokeBtn = screen.getByRole('button', { name: /new joke/i });
  userEvent.click(jokeBtn);
  
  const newRenderedJoke = await screen.findByText('My dog used ... his bike away.');
  expect(newRenderedJoke).toBeInTheDocument();
  expect(screen.queryByText(renderedJoke)).not.toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(2);
});