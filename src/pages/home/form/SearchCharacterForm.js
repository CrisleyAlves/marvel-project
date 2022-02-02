import { useSelector } from 'react-redux'
import './SearchCharacterForm.css'
import {
  Button,
  Input,
  Loader,
  Text
} from "../../../components"

const SearchCharacterForm = ({
  onSubmitSearchCharacter = () => {},
  onChangeField = () => {},
  value
}) => {
  const { characterSearchRequestStatus } = useSelector(state => state.character)

  return (
    <form className="SearchCharacterForm" onSubmit={onSubmitSearchCharacter}>
      
    <Input
      name="name"
      id="name"
      onChange={onChangeField}
      value={value}
      type="text"
      placeholder="Search a character by name"
    />

    {!characterSearchRequestStatus.loading && 
      <div className='SearchCharacterForm-actions'>
        <Button type="submit" styleType='secondary'>search</Button>
      </div>
    }

      {characterSearchRequestStatus.mainError && <Text styleType='danger'>{characterSearchRequestStatus.mainError}</Text>}
      {characterSearchRequestStatus.loading && <Loader />}
      
    </form>
  )
}

export default SearchCharacterForm
