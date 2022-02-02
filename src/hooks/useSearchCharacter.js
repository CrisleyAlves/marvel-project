import { useState } from "react"

import { getAllCharacters, searchCharacter as searchCharacterRequest } from '../state/actions/character'
import store from '../state/store'

const SEARCH_CHARACTER_INITIAL_STATE = {
  name: ''
}

const useSearchCharacter = () => {
  const [search, setSearch] = useState(SEARCH_CHARACTER_INITIAL_STATE)
  
  const onChangeField = (e) => setSearch({ [e.target.name]: e.target.value })

  const searchCharacter = (e) => {
    e.preventDefault()

    if(search.name.length === 0) {
      store.dispatch(getAllCharacters())
      return
    }
    store.dispatch(searchCharacterRequest(search))
  }

  return {
    search,
    onChangeField,
    searchCharacter
  }

}

export default useSearchCharacter;
