import React, { useState } from 'react'
import '../../styles/modal.css'
export const ModalWindow = ({ target, onClose }) => {
  const [isOpened, setIsOpened] = useState(true)
  return (
    <div className={`modal ${isOpened ? 'opened': 'closed'}`}>
      <button onClick={()=>{
        setIsOpened(false)
        setTimeout(()=>{
          onClose()
        }, 1000)
        }}>Close</button>
      <p className='modal-text'>ФИО: {`${target.lastName} ${target.firstName} ${target.maidenName}`}</p>
      <p className='modal-text'>Возраст: {target.age}</p>
      <p className='modal-text'>Адрес: {`${target.address.city}, ${target.address.address}`}</p>
      <p className='modal-text'>Рост: {target.height}</p>
      <p className='modal-text'>Вес: {target.weight}</p>
      <p className='modal-text'>Номер телефона: {target.phone}</p>
      <p className='modal-text'>Email: {target.email}</p>
    </div>
  );
};