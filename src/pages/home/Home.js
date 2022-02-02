import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import './Home.css';

import MarvelWallpaper from '../../images/marvel_wallpaper.jpg';
import { CharacterList, Loader, Text } from '../../components/';
import SearchCharacterForm from './form/SearchCharacterForm';

import { getAllCharacters } from '../../state/actions/character'
import store from '../../state/store'

import useSearchCharacter from '../../hooks/useSearchCharacter';

const HomePage = () => {
  const { search, onChangeField, searchCharacter } = useSearchCharacter()
  const { charactersListRequestStatus, charactersList } = useSelector(state => state.character)

  useEffect(() => {
    store.dispatch(getAllCharacters())
  }, [])

  return (
    <div className='Home'>
      <div className='MarvelWallpaperWrapper'>
        <img src={MarvelWallpaper} alt='Marvel' title='Marvel' />

        <SearchCharacterForm
          value={search.name}
          onChangeField={onChangeField}
          onSubmitSearchCharacter={searchCharacter}
        />
      </div>

      {charactersListRequestStatus.loading && <Loader />}
      {charactersListRequestStatus.mainError && <Text styleType='danger'>{charactersListRequestStatus.mainError}</Text>}
      {!charactersListRequestStatus.loading && !charactersListRequestStatus.mainError && <CharacterList characters={charactersList} />}
      {!charactersListRequestStatus.loading && charactersList.length === 0 && <Text styleType='warning'>We couldn't find any character</Text>}
    </div>
  )
}

export default HomePage;
