import { useSelector } from 'react-redux';
import './HeroDetail.css'

import { SectionTitle, Button, Modal, Loader } from '../../components/';
import SeriesList from './components/SeriesList';

import EditHeroForm from './form/EditHeroForm';

import useEditHero from '../../hooks/useEditHero'
import useToggle from '../../hooks/useToggle'

const HeroDetail = () => {
  const { setToggle: setShowModal, toggle: showModal } = useToggle()
  const { hero, onChangeField, updateHero, setHero } = useEditHero()
  
  const { characterDetail, characterDetailRequestStatus } = useSelector(state => state.character)

  const onClickEditButton = () => {
    setShowModal(true)
    setHero(characterDetail)
  }

  const onClickCloseModal = () => setShowModal(false)

  const handleOnSubmitEditHeroForm = (e) => {
    e.preventDefault();
    updateHero()
    setShowModal(false)
  }

  if (characterDetailRequestStatus.loading) return <Loader />

  const heroPhoto = `${characterDetail?.thumbnail?.path}.${characterDetail?.thumbnail?.extension}`;

  return (
    <div className='HeroDetail'>

      {showModal && 
        <Modal title='Edit Hero' showModal={true} onClickCloseModal={onClickCloseModal}>
          <EditHeroForm hero={hero} onChangeField={onChangeField} onSubmitEditHeroForm={handleOnSubmitEditHeroForm} />
        </Modal>
      }

      <div className='HeroDetail-header'>
        <img src={heroPhoto} alt='' title='' />
      </div>
      <div className='HeroDetail-content'>
        <SectionTitle text='Name' />
        <h1>{characterDetail.name} <Button styleType='secondary' onClick={onClickEditButton}>Edit</Button></h1>
                
        <SeriesList />
      </div>
    </div>
  )
}

export default HeroDetail;
