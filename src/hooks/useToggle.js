import { useState } from "react";

const TOGGLE_INITIAL_STATE = false

// Assuming that could have more boolean states to be controlled in other pages, decided to create
// a small hook to save some time
const useToggle = (initialState = TOGGLE_INITIAL_STATE) => {
  const [toggle, setToggle] = useState(initialState)
  
  return {
    toggle,
    setToggle
  }
}

export default useToggle;
