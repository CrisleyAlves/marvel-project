import './CharacterCard.css'

const CharacterCard = ({
  id,
  name,
  thumbnail
}) => {
  const characterPhoto = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <div className="CharacterCard">
      <div className="CharacterCard-header">
        <img className="CharacterCard-image" src={characterPhoto} alt="" title="" />
      </div>
      <div className="CharacterCard-content">
        <h2>{name}</h2>
        <a href="http://www.google.com">detail</a>
      </div>
    </div>
  )
}

export default CharacterCard;
