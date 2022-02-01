import './HeroDetail.css'

import { SectionTitle, Button } from '../../components/';
import SeriesList from './components/SeriesList';

const HeroDetail = () => {
  const onClickEditButton = () => {}

  return (
    <div className='HeroDetail'>
      <div className='HeroDetail-header'>
        <img src='http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg' alt='' title='' />
      </div>
      <div className='HeroDetail-content'>
        <SectionTitle text='Name' />
        <h1>HULK <Button styleType='secondary' onClick={() => onClickEditButton()}>Edit</Button></h1>
                
        <SeriesList />
      </div>
    </div>
  )
}

export default HeroDetail;
