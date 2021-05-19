import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimalCrossingDetails from './AnimalCrossingDetails';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockData from './villager.json';
import { MemoryRouter } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers/5f5fb4bbbfd05c2aed82e460', (req, res, ctx) => {
    return res(ctx.json(mockData))
  })
)

describe('AC Details container', () => {
  beforeAll(()=> server.listen());
  afterAll(() => server.close());

  it('shows a loading screen that says Wrangling Villager...', async () => {
    render(
    <MemoryRouter initialEntries={["/5f5fb4bbbfd05c2aed82e460"]}>
      <Route path="/:id">
        <AnimalCrossingDetails />
      </Route>
    </MemoryRouter>
    )

    screen.getByText('Wrangling Villager...');
  })

  it('gives a villager', async () => {
    render(
    <MemoryRouter initialEntries={["/5f5fb4bbbfd05c2aed82e460"]}>
      <Route path="/:id">
        <AnimalCrossingDetails />
      </Route>
    </MemoryRouter>
    )

    const unorderedList = await screen.findByRole('list', { name: 'villagers' });
    expect(unorderedList).toMatchSnapshot();
  })
})