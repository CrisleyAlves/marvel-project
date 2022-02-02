import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'

import store from '../state/store'
import { getCharacterById } from '../state/actions/character'
import { ADD_CHARACTER_TO_LOCAL_STORAGE } from "../state/actions/character/types"

const EDIT_CHARACTER_INITIAL_STATE = {
  name: ''
}

const useEditCharacter = (editCharacterInitialState = EDIT_CHARACTER_INITIAL_STATE) => {
  const [character, setCharacter] = useState(editCharacterInitialState)
  const dispatch = useDispatch()

  useEffect(() => {
    store.dispatch(getCharacterById())
  }, [])
  
  const onChangeField = (e) => setCharacter({ ...character, [e.target.name]: e.target.value })

  const updateCharacter = () => dispatch({
    type: ADD_CHARACTER_TO_LOCAL_STORAGE,
    payload: character
  })

  return {
    character,
    onChangeField,
    updateCharacter,
    setCharacter
  }

}

export default useEditCharacter;
