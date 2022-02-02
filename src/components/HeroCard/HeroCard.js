import './HeroCard.css'

const HeroCard = ({
  id,
  name,
  thumbnail
}) => {
  const heroPhoto = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <div className="HeroCard">
      <div className="HeroCard-header">
        <img className="HeroCard-image" src={heroPhoto} alt="" title="" />
      </div>
      <div className="HeroCard-content">
        <h2>{name}</h2>
        <a href="http://www.google.com">detail</a>
      </div>
    </div>
  )
}

export default HeroCard;
