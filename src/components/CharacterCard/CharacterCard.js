import { Link } from 'react-router-dom';
import './CharacterCard.css'

const CharacterCard = ({
  id,
  name,
  thumbnail
}) => {
  const characterPhoto = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <div className="CharacterCard" data-testid="CharacterCard">
      <div className="CharacterCard-header">
        <img className="CharacterCard-image" src={characterPhoto} alt="" title="" />
      </div>
      <div className="CharacterCard-content">
        <h2>{name}</h2>
        <Link to={`/character/${id}`}>detail</Link>
      </div>
    </div>
  )
}

export default CharacterCard;
