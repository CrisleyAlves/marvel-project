import './SeriesList.css'

import { SectionTitle } from '../../../components';

const SeriesList = ({
  series = [1,2,3,4,5,6]
}) => {
  return (
    <>
    <SectionTitle text='Series' />
    <ul className='SeriesList'>
      {series.map((serie, index) =>
        <li key={index} className='SeriesList-item'>
          <a href='http>//www.google.com.br'> Seré blab albalbalbal </a>
        </li>
      )}
    </ul>
    </>
  )
}

export default SeriesList;
