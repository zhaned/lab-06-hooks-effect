import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimalCrossing from './AnimalCrossing';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers', (req, res, ctx) => {
    return res(ctx.json())
  })
)

describe('AC container', () => {
  it('gives a list of villagers', async () => {
    render(<AnimalCrossing />)

    screen.getByText('Loading');
    const unorderedList = await screen.findByRole('list', { name: 'villagers' });
    expect(unorderedList).toMatchSnapshot();
  })
})