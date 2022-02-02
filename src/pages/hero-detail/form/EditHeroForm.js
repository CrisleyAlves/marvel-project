import './EditHeroForm.css'
import { Button, Input } from "../../../components";

const EditHeroForm = ({
  onSubmitEditHeroForm = () => {},
  onChangeField = () => {},
  hero = {}
}) => {
  return (
    <form className="EditHeroForm" onSubmit={onSubmitEditHeroForm}>
      <Input
        name="name"
        id="name"
        onChange={onChangeField}
        value={hero.name}
        label="Name"
        type="text"
    />

    <div className='EditHeroForm-actions'>
      <Button type="submit" styleType='primary'>Save</Button>
    </div>
    </form>
  )
}

export default EditHeroForm;
