import { createSpiderManCharacterMock } from "./character";
import { GET_CHARACTER_BY_ID } from "../../state/actions/character/types";
import store from "../../state/store"

export const createCharacterInStore = (character = createSpiderManCharacterMock()) => store.dispatch({
  type: GET_CHARACTER_BY_ID,
  payload: character
});
