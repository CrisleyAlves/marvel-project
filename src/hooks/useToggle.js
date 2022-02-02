import { useState } from "react";

// Assuming that could have more boolean states to be controlled in other pages, decided to create
// a small hook to save some time
const useToggle = () => {
  const [toggle, setToggle] = useState(false)
  
  return {
    toggle,
    setToggle
  }
}

export default useToggle;
