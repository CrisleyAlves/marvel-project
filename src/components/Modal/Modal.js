import './Modal.css'

import { Button } from '../'

const Modal = ({
  title = '',
  onClickCloseModal = () => {},
  showModal = false,
  children
}) => {
  return (
    <>
    {showModal && <div className='ModalWrapper active'>
      <div className="Modal">
        <div className="Modal-header">
          <h2>{title}</h2>
          <Button onClick={onClickCloseModal} styleType='clean'>X</Button>
        </div>

        <div className="Modal-content">
          {children}
        </div>
      </div>
    </div>}
    </>
  )
}

export default Modal;
