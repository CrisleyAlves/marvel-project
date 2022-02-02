import {
  ERROR_GET_ALL_CHARACTERS,
  ERROR_SEARCH_CHARACTER,
  GET_ALL_CHARACTERS,
  LOADING_GET_ALL_CHARACTERS,
  LOADING_SEARCH_CHARACTER,
  SEARCH_CHARACTER
} from "../../actions/character/types";

const REQUEST_STATUS = {
  loading: false,
  mainError: ''
}

const initialState = {
  charactersList: [],
  charactersListRequestStatus: REQUEST_STATUS,
  characterSearchRequestStatus: REQUEST_STATUS,
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
    case SEARCH_CHARACTER:
      return {
        ...state,
        charactersList: action.payload,
        characterSearchRequestStatus: {
          loading: false,
          mainError: ''
        }
      }
    case LOADING_SEARCH_CHARACTER:
      return {
        ...state,
        characterSearchRequestStatus: { loading: true }
      }
    case ERROR_SEARCH_CHARACTER:
      return {
        ...state,
        characterSearchRequestStatus: { loading: false, mainError: 'An error occured, please try again later' }
      }
    default:
      return state;
  }
}
