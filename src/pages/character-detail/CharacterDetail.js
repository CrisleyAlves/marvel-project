import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import './CharacterDetail.css'

import {
  SectionTitle,
  Button,
  Loader,
  NotFound
} from '../../components';
import SeriesList from './components/SeriesList';

import store from '../../state/store';
import { getCharacterById } from '../../state/actions/character';

const CharacterDetail = () => {
  const { characterDetail, characterDetailRequestStatus } = useSelector(state => state.character)

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    store.dispatch(getCharacterById(params.id))
  }, [])

  if (characterDetailRequestStatus.loading) return <Loader />

  if (characterDetailRequestStatus.mainError) return <NotFound />

  const characterPhoto = `${characterDetail?.thumbnail?.path}.${characterDetail?.thumbnail?.extension}`;

  return (
    <div className='CharacterDetail'>
      <div className='CharacterDetail-header'>
        <img src={characterPhoto} alt='' title='' />
      </div>
      <div className='CharacterDetail-content'>
        <SectionTitle text='Name' />
        <h1>{characterDetail.name} <Button styleType='secondary' onClick={() => navigate('/character/edit/')}>Edit</Button></h1>
        <SeriesList />
      </div>
    </div>
  )
}

export default CharacterDetail;
