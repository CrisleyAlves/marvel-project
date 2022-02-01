import { GET_ALL_CHARACTERS } from "../../actions/character/types";

const initialState = {
  charactersList: [],
};

export default function characterReducer (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        charactersList: action.payload.results
      }
    default:
      return state;
  }
}
