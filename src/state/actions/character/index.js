import axios from 'axios';

import { HTTP_STATUS } from '../../utils';
import { GET_ALL_CHARACTERS_ENDPOINT } from '../../../api/endpoints';
import { GET_ALL_CHARACTERS } from './types';

export const getAllCharacters = () => async (dispatch) => {
  const { code, data } = await axios.get(GET_ALL_CHARACTERS_ENDPOINT)

  if(code === HTTP_STATUS.ok) {
    dispatch({
      type: GET_ALL_CHARACTERS,
      payload: data,
    });
  }
};
