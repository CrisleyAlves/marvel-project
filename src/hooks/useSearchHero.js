import { useState } from "react"

import { getAllCharacters, searchCharacter } from '../state/actions/character'
import store from '../state/store'

const SEARCH_HERO_INITIAL_STATE = {
  name: ''
}

const useSearchHero = () => {
  const [search, setSearch] = useState(SEARCH_HERO_INITIAL_STATE)
  
  const onChangeField = (e) => setSearch({ [e.target.name]: e.target.value })

  const searchHero = (e) => {
    e.preventDefault()

    if(search.name.length === 0) {
      store.dispatch(getAllCharacters())
      return
    }
    store.dispatch(searchCharacter(search))
  }

  return {
    search,
    onChangeField,
    searchHero
  }

}

export default useSearchHero;
