import React from 'react';
import App from '../App.js';
import Results from '../components/results/index';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

it('should render a list of star wars char', async () => {
  const raw = await fetch ('https://swapi.dev/api/people/');
  let data = await raw.json();
  let people = data.results;
  let results = Object.entries(people);

  render(<Results src={results} />);

  expect(results).toBeTruthy();
});