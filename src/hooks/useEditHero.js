import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'

import store from '../state/store'
import { getCharacterById } from '../state/actions/character'
import { ADD_CHARACTER_TO_LOCAL_STORAGE } from "../state/actions/character/types"

const EDIT_HERO_INITIAL_STATE = {
  name: ''
}

const useEditHero = (editHeroInitialState = EDIT_HERO_INITIAL_STATE) => {
  const [hero, setHero] = useState(editHeroInitialState)
  const dispatch = useDispatch()

  useEffect(() => {
    getHeroById();
  }, [])

  const getHeroById = () => store.dispatch(getCharacterById())
  
  const onChangeField = (e) => setHero({ ...hero, [e.target.name]: e.target.value })

  const updateHero = () => dispatch({
    type: ADD_CHARACTER_TO_LOCAL_STORAGE,
    payload: hero
  })

  return {
    hero,
    onChangeField,
    updateHero,
    setHero
  }

}

export default useEditHero;
