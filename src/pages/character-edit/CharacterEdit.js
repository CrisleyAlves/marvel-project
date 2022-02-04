import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { Modal } from '../../components';

import EditCharacterForm from './form/EditCharacterForm';

import useToggle from '../../hooks/useToggle'
import useEditCharacter from '../../hooks/useEditCharacter'

const CharacterEdit = () => {
  const { characterDetail } = useSelector(state => state.character)
  const { toggle: showModal } = useToggle(true)
  const { character, onChangeField, updateCharacter, setCharacter } = useEditCharacter()

  const navigate = useNavigate();

  useEffect(() => {
    if(!characterDetail.id) navigate('/')
    setCharacter(characterDetail)
  }, [])

  const onClickCloseModal = () => navigate('/')

  const handleOnSubmitEditCharacterForm = (e) => {
    e.preventDefault();
    updateCharacter()
    alert('Character name updated and saved on localstorage')
    navigate('/')
  }

  return (
    <div className="CharacterEdit">
      {showModal &&
        <Modal title='Edit character' showModal={true} onClickCloseModal={onClickCloseModal}>
          <EditCharacterForm
            character={character}
            onChangeField={onChangeField}
            onSubmitEditCharacterForm={handleOnSubmitEditCharacterForm}
          />
        </Modal>
      }
    </div>
  )
};

export default CharacterEdit;
