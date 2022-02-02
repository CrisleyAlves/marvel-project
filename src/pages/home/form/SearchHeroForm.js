import './SearchHeroForm.css'
import { Button, Input } from "../../../components"

const SearchHeroForm = ({
  onSubmitSearchHero = () => {},
  onChangeField = () => {},
  value
}) => {
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

      <div className='SearchHeroForm-actions'>
        <Button type="submit" styleType='secondary'>search</Button>
      </div>
    </form>
  )
}

export default SearchHeroForm
