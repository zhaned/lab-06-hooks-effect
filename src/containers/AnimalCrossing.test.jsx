import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimalCrossing from './AnimalCrossing';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockData from './villagers.json';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers', (req, res, ctx) => {
    return res(ctx.json(mockData))
  })
)

describe('AC container', () => {
  beforeAll(()=> server.listen());
  afterAll(() => server.close());

  it('shows a loading screen that says Wrangling Villagers...', async () => {
    render(<AnimalCrossing />)

    screen.getByText('Wrangling Villagers...');
  })

  it('gives a list of villagers', async () => {
    render(<AnimalCrossing />)

    const unorderedList = await screen.findByRole('list', { name: 'villagers' });
    expect(unorderedList).toMatchSnapshot();
  })
})