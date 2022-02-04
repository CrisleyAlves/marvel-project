import './EditCharacterForm.css'
import { Button, Input } from "../../../components";

const EditCharacterForm = ({
  onSubmitEditCharacterForm = () => {},
  onChangeField = () => {},
  character = {}
}) => {
  return (
    <form className="EditCharacterForm" onSubmit={onSubmitEditCharacterForm}>
      <Input
        name="name"
        id="name"
        onChange={onChangeField}
        value={character.name}
        label="Name"
        type="text"
    />

    <div className='EditCharacterForm-actions'>
      <Button type="submit" styleType='primary'>Save</Button>
    </div>
    </form>
  )
}

export default EditCharacterForm;
