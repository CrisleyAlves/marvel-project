import axios from 'axios';

import { HTTP_STATUS } from '../../utils';
import { GET_ALL_CHARACTERS_ENDPOINT, GET_CHARACTER_BY_ID_ENDPOINT, SEARCH_CHARACTER_ENDPOINT } from '../../../api/endpoints';
import {
  ERROR_GET_ALL_CHARACTERS,
  ERROR_GET_CHARACTER_BY_ID,
  ERROR_SEARCH_CHARACTER,
  GET_ALL_CHARACTERS,
  GET_CHARACTER_BY_ID,
  LOADING_GET_ALL_CHARACTERS,
  LOADING_GET_CHARACTER_BY_ID,
  LOADING_SEARCH_CHARACTER,
  SEARCH_CHARACTER
} from './types';

export const getAllCharacters = () => async (dispatch) => {
  dispatch({ type: LOADING_GET_ALL_CHARACTERS });

  try {
    const { data } = await axios.get(GET_ALL_CHARACTERS_ENDPOINT)

    if(data.code === HTTP_STATUS.ok) {
      const { data: characters } = data;

      dispatch({
        type: GET_ALL_CHARACTERS,
        payload: characters.results,
      });
    } 
  } catch (error) {
    dispatch({
      type: ERROR_GET_ALL_CHARACTERS
    }) 
  }
};

export const searchCharacter = (params) => async (dispatch) => {
  dispatch({ type: LOADING_SEARCH_CHARACTER });

  try {
    const { data } = await axios.get(SEARCH_CHARACTER_ENDPOINT, {
      params: {
        nameStartsWith: params.name
      }
    })

    if(data.code === HTTP_STATUS.ok) {
      const { data: characters } = data;

      dispatch({
        type: SEARCH_CHARACTER,
        payload: characters.results,
      });
    } 
  } catch (error) {
    dispatch({
      type: ERROR_SEARCH_CHARACTER
    }) 
  }
};

export const getCharacterById = (id = 1011334) => async (dispatch) => {
  dispatch({ type: LOADING_GET_CHARACTER_BY_ID });

  try {
    const { data } = await axios.get(GET_CHARACTER_BY_ID_ENDPOINT.replace('[id]', id))

    if(data.code === HTTP_STATUS.ok) {
      const { data: characters } = data;

      dispatch({
        type: GET_CHARACTER_BY_ID,
        payload: characters.results[0],
      });
    }
  } catch (error) {
    dispatch({
      type: ERROR_GET_CHARACTER_BY_ID
    }) 
  }
};
