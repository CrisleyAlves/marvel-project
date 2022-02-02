import { useState } from "react"

const EDIT_HERO_INITIAL_STATE = {
  name: ''
}

const useEditHero = () => {
  const [hero, setHero] = useState(EDIT_HERO_INITIAL_STATE)
  
  const onChangeField = (fieldName, fieldValue) => setHero({ ...hero, [fieldName]: fieldValue })

  const onSubmitEditHeroForm = () => {}

  return {
    hero,
    onChangeField,
    onSubmitEditHeroForm
  }

}

export default useEditHero;
