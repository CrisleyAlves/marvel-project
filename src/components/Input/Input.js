import './Input.css'

const Input = ({
  type = 'text',
  id = '',
  name = '',
  onChange = () => {},
  value = '',
  label = ''
}) => {
  return (
    <div className='InputGroup'>
      <label htmlFor='name'>{label}</label>
      <input className="Input" id={id} name={name} type={type} onChange={onChange} value={value} />
    </div>
  )
}

export default Input
