import './SeriesList.css'

import { SectionTitle } from '../../../components';
import { useSelector } from 'react-redux';

const SeriesList = () => {
  const { characterDetail } = useSelector(state => state.character)

  return (
    <>
    <SectionTitle text='Series' />
    <ul className='SeriesList'>
      {characterDetail?.series?.items.map((serie, index) =>
        <li key={index} className='SeriesList-item'>
          {serie.name}
        </li>
      )}
    </ul>
    </>
  )
}

export default SeriesList;
