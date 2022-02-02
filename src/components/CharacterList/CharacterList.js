import './CharacterList.css'
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = ({
  characters = []
}) => {
  return (
    <div className="CharacterList">
      {characters.map(character => <CharacterCard key={character.id} id={character.id} name={character.name} thumbnail={character.thumbnail} />)}
    </div>
  )
}

export default CharacterList;
