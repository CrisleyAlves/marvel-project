import { cleanup, render, screen } from '@testing-library/react';
import { create3DMANCharacterMock } from '../../tests/mocks/character';
import RouterWrapper from '../../tests/RouterWrapper';

import CharacterCard from './CharacterCard'

const characterMock = create3DMANCharacterMock()

describe('CharacterCard', () => {
  beforeEach(cleanup)

  test('Should render character name and photo', () => {
    render (
      <RouterWrapper>
        <CharacterCard id={characterMock.id} name={characterMock.name} thumbnail={characterMock.thumbnail} />
      </RouterWrapper>
    );

    screen.getByText(/3-D Man/i);
    const characterPhoto = screen.getByRole('img')
    expect(characterPhoto).toHaveAttribute('src', 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg')
  });

  test('Should have the link to the character detail page', () => {
    render (
      <RouterWrapper>
        <CharacterCard
          id={characterMock.id}
          name={characterMock.name}
          thumbnail={characterMock.thumbnail}
        />
      </RouterWrapper>
    );
    const detailLink = screen.getByRole('link')
    expect(detailLink).toHaveAttribute('href', `/character/${characterMock.id}`)
    expect(detailLink).toBeInTheDocument()
  });
});