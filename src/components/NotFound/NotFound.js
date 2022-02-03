import './NotFound.css'
import notFoundImage from '../../images/not_found.jpg'

const NotFound = () => {
  return (
    <div className='NotFound'>
      <img src={notFoundImage} alt='Not found' title='Not found' />
    </div>
  )
}

export default NotFound;
