import axios from 'axios';

import { HTTP_STATUS } from '../../utils';
import { GET_ALL_CHARACTERS_ENDPOINT } from '../../../api/endpoints';
import { ERROR_GET_ALL_CHARACTERS, GET_ALL_CHARACTERS, LOADING_GET_ALL_CHARACTERS } from './types';

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
