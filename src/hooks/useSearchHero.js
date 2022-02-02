import { useState } from "react"

const SEARCH_HERO_INITIAL_STATE = {
  name: ''
}

const useSearchHero = () => {
  const [search, setSearch] = useState(SEARCH_HERO_INITIAL_STATE)
  
  const onChangeField = (e) => setSearch({ [e.target.name]: e.target.value })

  const searchHero = (e) => {
    e.preventDefault()
    console.log(search)
  }

  return {
    search,
    onChangeField,
    searchHero
  }

}

export default useSearchHero;
