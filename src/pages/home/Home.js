import { connect } from 'react-redux';
import './Home.css';

import { getAllCharacters } from '../../state/actions/character'

import HeroList from '../../components/HeroList/HeroList';

const HomePage = () => {
  return (
    <div className='Home'>
      <HeroList />
    </div>
  )
}

const mapStateToProps = state => ({
  characterList: state.character.charactersList
});

export default connect(mapStateToProps, { getAllCharacters })(HomePage);
