import axios from 'axios';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react';

import RouterWrapper from '../../tests/RouterWrapper';
import { mockCharacterDetailRequestWithData } from '../../tests/mocks/requests';

import CharacterDetail from './CharacterDetail'

jest.mock('axios')

describe('CharacterDetail - Fail use cases', () => {
  beforeEach(() => {
    cleanup()

    axios.get.mockRejectedValue({
      response: {
        data: {
          status: 'error message'
        }
      }
    })
  })

  afterEach(() => jest.restoreAllMocks())

  test('Should show not found when receiving an error from the api', async () => {
    render (
      <RouterWrapper>
        <CharacterDetail />
      </RouterWrapper>
    );

    await waitFor(() => console.log('upadting ui'))
    
    const notFoundImage = screen.getByRole('img')
    expect(notFoundImage).toHaveAttribute('src', 'not_found.jpg')
    expect(notFoundImage).toHaveAttribute('title', 'Not found')
    expect(notFoundImage).toHaveAttribute('alt', 'Not found')
  });
});

describe('CharacterDetail - Success use cases', () => {
  beforeEach(() => {
    cleanup()
    axios.get.mockResolvedValue(mockCharacterDetailRequestWithData())
  })
  
  afterEach(() => jest.restoreAllMocks());

  test('Should render the page with character details', async () => {
    render (
      <RouterWrapper>
        <CharacterDetail />
      </RouterWrapper>
    );

    await waitFor(() => screen.findAllByTestId('CharacterDetail'));
    
    const characterPhoto = screen.getByRole('img')
    const editButton = screen.getByRole('button')
    
    expect(editButton.innerHTML).toBe('Edit')
    expect(screen.getByText(/3-D Man/i)).toBeInTheDocument();
    expect(characterPhoto).toHaveAttribute('src', 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg')
  });

  test('Should navigate to edit page when clicking on edit', async () => {
    render (
      <RouterWrapper>
        <CharacterDetail />
      </RouterWrapper>
    );

    await waitFor(() => screen.findAllByTestId('CharacterDetail'));
    
    const editButton = screen.getByRole('button')
    fireEvent.click(editButton)

    expect(window.location.pathname).toBe('/character/edit/')
  });
});
