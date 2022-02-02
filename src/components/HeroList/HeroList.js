import './HeroList.css'
import HeroCard from "../HeroCard/HeroCard";

const HeroList = ({
  heroes = [1,2,3,4,5,6,7]
}) => {
  return (
    <div className="HeroList">
      {heroes.map((hero, index) => <HeroCard key={hero.id} id={hero.id} name={hero.name} thumbnail={hero.thumbnail} />)}
    </div>
  )
}

export default HeroList;
