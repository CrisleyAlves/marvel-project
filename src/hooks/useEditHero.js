import { useState } from "react"

const EDIT_HERO_INITIAL_STATE = {
  name: ''
}

const useEditHero = () => {
  const [hero, setHero] = useState(EDIT_HERO_INITIAL_STATE)
  
  const onChangeField = (e) => setHero({ ...hero, [e.target.name]: e.target.value })

  const updateHero = () => console.log(hero)

  return {
    hero,
    onChangeField,
    updateHero
  }

}

export default useEditHero;
