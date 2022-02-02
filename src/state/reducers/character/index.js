import { ERROR_GET_ALL_CHARACTERS, GET_ALL_CHARACTERS, LOADING_GET_ALL_CHARACTERS, SUCCESS_GET_ALL_CHARACTERS } from "../../actions/character/types";

const initialState = {
  charactersList: [],
  charactersListRequestStatus: {
    loading: false,
    mainError: ''
  }
};

export default function characterReducer (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        charactersList: action.payload,
        charactersListRequestStatus: {
          loading: false,
          mainError: ''
        }
      }
    case LOADING_GET_ALL_CHARACTERS:
      return {
        ...state,
        charactersListRequestStatus: { loading: true }
      }
    case ERROR_GET_ALL_CHARACTERS:
      return {
        ...state,
        charactersListRequestStatus: { loading: false, mainError: 'An error occured, please try again later' }
      }
    case SUCCESS_GET_ALL_CHARACTERS:
        return {
          ...state,
          charactersListRequestStatus: { loading: false, mainError: '' }
        }
    default:
      return state;
  }
}
