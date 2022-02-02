import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import './Home.css';

import MarvelWallpaper from '../../images/marvel_wallpaper.jpg';
import { HeroList, Loader, Text } from '../../components/';

import SearchHeroForm from './form/SearchHeroForm';
import { getAllCharacters } from '../../state/actions/character'
import useSearchHero from '../../hooks/useSearchHero';
import store from '../../state/store'

const HomePage = () => {
  const { search, onChangeField, searchHero } = useSearchHero()
  const { charactersListRequestStatus, charactersList } = useSelector(state => state.character)

  useEffect(() => {
    store.dispatch(getAllCharacters())
  }, [])

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

      {charactersListRequestStatus.loading && <Loader />}
      <Text styleType='danger'>{charactersListRequestStatus.mainError}</Text>
      {!charactersListRequestStatus.loading && !charactersListRequestStatus.mainError && <HeroList heroes={charactersList} />}
    </div>
  )
}

export default HomePage;
