import { connect } from 'react-redux';
import './Home.css';

import { HeroList } from '../../components/';
import MarvelWallpaper from '../../images/marvel_wallpaper.jpg';

import SearchHeroForm from './form/SearchHeroForm';
import { getAllCharacters } from '../../state/actions/character'
import useSearchHero from '../../hooks/useSearchHero';

const HomePage = () => {
  const { search, onChangeField, searchHero } = useSearchHero()

  return (
    <div className='Home'>
      <div className='MarvelWallpaperWrapper'>
        <img src={MarvelWallpaper} alt='Marvel' title='Marvel' />

        <SearchHeroForm
          value={search.name}
          onChangeField={onChangeField}
          onSubmitSearchHero={searchHero}
        />
      </div>

      <HeroList />
    </div>
  )
}

const mapStateToProps = state => ({
  characterList: state.character.charactersList
});

export default connect(mapStateToProps, { getAllCharacters })(HomePage);
