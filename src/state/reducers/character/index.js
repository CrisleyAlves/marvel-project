import {
  ADD_CHARACTER_TO_LOCAL_STORAGE,
  ERROR_GET_ALL_CHARACTERS,
  ERROR_GET_CHARACTER_BY_ID,
  ERROR_SEARCH_CHARACTER,
  GET_ALL_CHARACTERS,
  GET_CHARACTER_BY_ID,
  LOADING_GET_ALL_CHARACTERS,
  LOADING_GET_CHARACTER_BY_ID,
  LOADING_SEARCH_CHARACTER,
  SEARCH_CHARACTER
} from "../../actions/character/types";

const REQUEST_STATUS = {
  loading: false,
  mainError: ''
}

const initialState = {
  charactersList: [],
  characterDetail: {},
  charactersListRequestStatus: REQUEST_STATUS,
  characterSearchRequestStatus: REQUEST_STATUS,
  characterDetailRequestStatus: REQUEST_STATUS,
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
    case GET_CHARACTER_BY_ID:
      return {
        ...state,
        characterDetail: action.payload,
        characterDetailRequestStatus: { loading: false, mainError: '' }
      }
    case LOADING_GET_CHARACTER_BY_ID:
      return {
        ...state,
        characterDetailRequestStatus: { loading: true }
      }
    case ERROR_GET_CHARACTER_BY_ID:
      return {
        ...state,
        characterDetailRequestStatus: { loading: false, mainError: 'An error occured, please try again later' }
      }

    case ADD_CHARACTER_TO_LOCAL_STORAGE:
      const characters = JSON.parse(localStorage.getItem('characters')) || []
      const userCharacters = characters.filter(character => character.id !== action.payload.id)
      const newUserCharacters = [...userCharacters, action.payload]

      localStorage.setItem('characters', JSON.stringify(newUserCharacters))
      return state
    default:
      return state;
  }
}
