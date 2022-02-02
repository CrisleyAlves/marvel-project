import './Input.css'

const Input = ({
  type = 'text',
  id = '',
  name = '',
  onChange = () => {},
  value = '',
  label = '',
  placeholder= ""
}) => {
  return (
    <div className='InputGroup'>
      <label htmlFor='name'>{label}</label>
      <input placeholder={placeholder} className="Input" id={id} name={name} type={type} onChange={onChange} value={value} />
    </div>
  )
}

export default Input
