import { useSelector } from 'react-redux';
import './CharacterDetail.css'

import { SectionTitle, Button, Modal, Loader } from '../../components';
import SeriesList from './components/SeriesList';

import EditCharacterForm from './form/EditCharacterForm';

import useEditCharacter from '../../hooks/useEditCharacter'
import useToggle from '../../hooks/useToggle'

const CharacterDetail = () => {
  const { setToggle: setShowModal, toggle: showModal } = useToggle()
  const { character, onChangeField, updateCharacter, setCharacter } = useEditCharacter()
  
  const { characterDetail, characterDetailRequestStatus } = useSelector(state => state.character)

  const onClickEditButton = () => {
    setShowModal(true)
    setCharacter(characterDetail)
  }

  const onClickCloseModal = () => setShowModal(false)

  const handleOnSubmitEditCharacterForm = (e) => {
    e.preventDefault();
    updateCharacter()
    setShowModal(false)
  }

  if (characterDetailRequestStatus.loading) return <Loader />

  const characterPhoto = `${characterDetail?.thumbnail?.path}.${characterDetail?.thumbnail?.extension}`;

  return (
    <div className='CharacterDetail'>
      {showModal && 
        <Modal title='Edit character' showModal={true} onClickCloseModal={onClickCloseModal}>
          <EditCharacterForm character={character} onChangeField={onChangeField} onSubmitEditCharacterForm={handleOnSubmitEditCharacterForm} />
        </Modal>
      }

      <div className='CharacterDetail-header'>
        <img src={characterPhoto} alt='' title='' />
      </div>
      <div className='CharacterDetail-content'>
        <SectionTitle text='Name' />
        <h1>{characterDetail.name} <Button styleType='secondary' onClick={onClickEditButton}>Edit</Button></h1>
                
        <SeriesList />
      </div>
    </div>
  )
}

export default CharacterDetail;
