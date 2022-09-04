import axios from 'axios';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react';

import RouterWrapper from '../../tests/RouterWrapper';

import {
  axiosMockErrorFromTheAPI,
  axiosMockGetAllCharactersRequestWithData,
  axiosMockSearchCharacterRequestWithData,
  axiosMockSearchCharacterRequestWithNoData,
} from '../../tests/mocks/axios';

import Home from './Home'

jest.mock('axios')

describe('Home - Success use cases', () => {
  beforeEach(() => {
    cleanup()
    axiosMockGetAllCharactersRequestWithData()
  })
  
  afterEach(() => jest.restoreAllMocks());

  test('Should render a list of characters', async () => {
    render (
      <RouterWrapper>
        <Home />
      </RouterWrapper>
    );

    const characters = await waitFor(() => screen.findAllByTestId('CharacterCard'));
    expect(characters.length).toBe(2)
  });

  test('Should change search input text, search for character and return 1 character', async () => {
    render (
      <RouterWrapper>
        <Home />
      </RouterWrapper>
    );

    await waitFor(() => screen.findAllByTestId('CharacterCard'));

    // Mocking the search character request
    axiosMockSearchCharacterRequestWithData()

    const searchInputText = screen.getByPlaceholderText('Search a character by name');
    const searchButtonSubmit = screen.getByText('search');

    fireEvent.change(searchInputText, { target: { value: 'character name' } })
    fireEvent.click(searchButtonSubmit);

    await waitFor(() => screen.findAllByTestId('CharacterCard'));
    const teste = await waitFor(() => screen.findAllByTestId('CharacterCard'));
    
    expect(teste.length).toBe(1)
  });

  test('Should change search input text, search for character and return no data', async () => {
    render (
      <RouterWrapper>
        <Home />
      </RouterWrapper>
    );

    await waitFor(() => screen.findAllByTestId('CharacterCard'));

    // Mocking the search character request
    axiosMockSearchCharacterRequestWithNoData()

    const searchInputText = screen.getByPlaceholderText('Search a character by name');
    const searchButtonSubmit = screen.getByText('search');

    fireEvent.change(searchInputText, { target: { value: 'character name' } })
    fireEvent.click(searchButtonSubmit);

    await waitFor(() => screen.findByText("We couldn't find any character"));
    expect(screen.getByText("We couldn't find any character")).toBeInTheDocument()
  });
});

describe('Home - Fail use cases', () => {
  beforeEach(() => {
    cleanup()
    axiosMockErrorFromTheAPI()
  })
  
  afterEach(() => jest.restoreAllMocks());

  test('Should render a list of characters with an error message', async () => {
    render (
      <RouterWrapper>
        <Home />
      </RouterWrapper>
    );

    await waitFor(() => screen.findByText("An error occured, please try again later"));
    
    expect(screen.getByText("An error occured, please try again later")).toBeInTheDocument()
  });

  test('Should show an error message when receiving an error from search request', async () => {
    // populating initial data
    axiosMockGetAllCharactersRequestWithData()

    render (
      <RouterWrapper>
        <Home />
      </RouterWrapper>
    );

    const characters = await waitFor(() => screen.findAllByTestId('CharacterCard'));
    expect(characters.length).toBe(2)

    const searchInputText = screen.getByPlaceholderText('Search a character by name');
    const searchButtonSubmit = screen.getByText('search');

    // Mocking an error from the api
    axiosMockErrorFromTheAPI()
    const axiosSpy = jest.spyOn(axios, 'get')

    fireEvent.change(searchInputText, { target: { value: 'character name' } })
    fireEvent.click(searchButtonSubmit);

    await waitFor(() => screen.findByText('An error occured, please try again later'));
    expect(axiosSpy).toHaveBeenCalled()
    screen.getByText('An error occured, please try again later')
  });
});
