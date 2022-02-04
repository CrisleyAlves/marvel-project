import { cleanup, render, screen } from '@testing-library/react';
import { create3DMANCharacterMock, createSpiderManCharacterMock } from '../../tests/mocks/character';
import RouterWrapper from '../../tests/RouterWrapper';

import CharacterList from './CharacterList'

describe('CharacterList', () => {
  beforeEach(cleanup)

  test('Should render a list of characters', () => {
    render (
      <RouterWrapper>
        <CharacterList characters={[create3DMANCharacterMock(), createSpiderManCharacterMock()]} />
      </RouterWrapper>
    );

    const characterCards = screen.queryAllByTestId('CharacterCard')
    expect(characterCards.length).toBe(2)
  });

  test('Should render no character if no data is provided', () => {
    render (
      <RouterWrapper>
        <CharacterList
          characters={[]}
        />
      </RouterWrapper>
    );
    
    const characterCards = screen.queryAllByTestId('CharacterCard')
    expect(characterCards.length).toBe(0)
  });
});