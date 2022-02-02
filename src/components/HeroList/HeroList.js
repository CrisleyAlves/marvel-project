import './HeroList.css'
import HeroCard from "../HeroCard/HeroCard";

const HeroList = ({
  heroes = []
}) => {
  return (
    <div className="HeroList">
      {heroes.map(hero => <HeroCard key={hero.id} id={hero.id} name={hero.name} thumbnail={hero.thumbnail} />)}
    </div>
  )
}

export default HeroList;
