import { useSelector } from 'react-redux'
import './SearchHeroForm.css'
import {
  Button,
  Input,
  Loader,
  Text
} from "../../../components"

const SearchHeroForm = ({
  onSubmitSearchHero = () => {},
  onChangeField = () => {},
  value
}) => {
  const { characterSearchRequestStatus } = useSelector(state => state.character)

  return (
    <form className="SearchHeroForm" onSubmit={onSubmitSearchHero}>
      
    <Input
      name="name"
      id="name"
      onChange={onChangeField}
      value={value}
      type="text"
      placeholder="Search a hero by name"
    />

    {!characterSearchRequestStatus.loading && 
      <div className='SearchHeroForm-actions'>
        <Button type="submit" styleType='secondary'>search</Button>
      </div>
    }

      {characterSearchRequestStatus.mainError && <Text styleType='danger'>{characterSearchRequestStatus.mainError}</Text>}
      {characterSearchRequestStatus.loading && <Loader />}
      
    </form>
  )
}

export default SearchHeroForm
