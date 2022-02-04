import axios from 'axios';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react';

import RouterWrapper from '../../tests/RouterWrapper';
import { mockGetAllCharactersRequestWithData, mockSearchCharacterRequestWithData } from '../../tests/mocks/requests';

import Home from './Home'

jest.mock('axios')

describe('Home - Success use cases', () => {
  beforeEach(() => {
    cleanup()
    axios.get.mockResolvedValue(mockGetAllCharactersRequestWithData())
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
    axios.get.mockResolvedValue(mockSearchCharacterRequestWithData())

    const searchInputText = screen.getByPlaceholderText('Search a character by name');
    const searchButtonSubmit = screen.getByText('search');

    fireEvent.change(searchInputText, { target: { value: 'character name' } })
    fireEvent.click(searchButtonSubmit);

    await waitFor(() => console.log('updating ui'));
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
    const searchCharacterMock = mockSearchCharacterRequestWithData()
    searchCharacterMock.data.data.results = []
    axios.get.mockResolvedValue(searchCharacterMock)

    const searchInputText = screen.getByPlaceholderText('Search a character by name');
    const searchButtonSubmit = screen.getByText('search');

    fireEvent.change(searchInputText, { target: { value: 'character name' } })
    fireEvent.click(searchButtonSubmit);

    await waitFor(() => console.log('updating ui'));
    expect(screen.getByText("We couldn't find any character")).toBeInTheDocument()
  });
});

describe('Home - Fail use cases', () => {
  beforeEach(() => {
    cleanup()
    axios.get.mockResolvedValue({})
  })
  
  afterEach(() => jest.restoreAllMocks());

  test('Should render a list of characters with an error message', async () => {
    render (
      <RouterWrapper>
        <Home />
      </RouterWrapper>
    );

    await waitFor(() => console.log('updating ui'));
    
    expect(screen.getByText("An error occured, please try again later")).toBeInTheDocument()
  });

  test('Should show an error message when receiving an error from search request', async () => {
    // populating initial data
    axios.get.mockResolvedValue(mockGetAllCharactersRequestWithData())

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
    axios.get.mockResolvedValue({})
    const axiosSpy = jest.spyOn(axios, 'get')

    fireEvent.change(searchInputText, { target: { value: 'character name' } })
    fireEvent.click(searchButtonSubmit);

    await waitFor(() => console.log('updating ui'));
    expect(axiosSpy).toHaveBeenCalled()
    screen.getByText('An error occured, please try again later')
  });
});
