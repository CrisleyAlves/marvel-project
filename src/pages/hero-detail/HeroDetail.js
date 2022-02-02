import './HeroDetail.css'

import { SectionTitle, Button, Modal } from '../../components/';
import SeriesList from './components/SeriesList';

import EditHeroForm from './form/EditHeroForm';

import useEditHero from '../../hooks/useEditHero'
import useToggle from '../../hooks/useToggle'

const HeroDetail = () => {
  const {
    setToggle,
    toggle
  } = useToggle()

  const {
    hero,
    onChangeField,
    updateHero
  } = useEditHero()

  const onClickEditButton = () => setToggle(true)
  const onClickCloseModal = () => setToggle(false)

  const handleOnSubmitEditHeroForm = async (e) => {
    e.preventDefault();
    await updateHero()
    setToggle(false)
  }

  return (
    <div className='HeroDetail'>

      {toggle && 
        <Modal title='Edit Hero' showModal={true} onClickCloseModal={onClickCloseModal}>
          <EditHeroForm hero={hero} onChangeField={onChangeField} onSubmitEditHeroForm={handleOnSubmitEditHeroForm} />
        </Modal>
      }

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
