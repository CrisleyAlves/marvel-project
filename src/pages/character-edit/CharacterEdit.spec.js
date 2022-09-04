import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react';

import RouterWrapper from '../../tests/RouterWrapper';
import { createCharacterInStore } from '../../tests/mocks/store';

import CharacterEdit from './CharacterEdit'
import { createSpiderManCharacterMock } from '../../tests/mocks/character';

const spiderManCharacter = createSpiderManCharacterMock()

describe('CharacterEdit - Success use cases', () => {
  beforeEach(() => {
    cleanup()
    createCharacterInStore(spiderManCharacter)
    window.alert = () => {};
  })

  test('Should render the page with character details', async () => {
    render (
      <RouterWrapper>
        <CharacterEdit />
      </RouterWrapper>
    );

    await waitFor(() => screen.findByPlaceholderText(''))

    const input = screen.getByPlaceholderText('')
    const submitButton = screen.getByText('Save')
    const closeModalButton = screen.getByText('X')

    expect(input.value).toBe(spiderManCharacter.name)
    expect(submitButton).toBeInTheDocument()
    expect(closeModalButton).toBeInTheDocument()
  });

  test('should save character in local storage', async () => {
    render (
      <RouterWrapper>
        <CharacterEdit />
      </RouterWrapper>
    );

    const characters = JSON.parse(localStorage.getItem('characters')) || []
    expect(characters.length).not.toBe(1)
    expect(characters.length).toBe(0)

    const submitButton = screen.getByText('Save')
    fireEvent.click(submitButton)

    const updatedCharacters = JSON.parse(localStorage.getItem('characters')) || []
    expect(updatedCharacters.length).not.toBe(0)
    expect(updatedCharacters.length).toBe(1)
  });
});
