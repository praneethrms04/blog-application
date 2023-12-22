"use client"
import React, { useState } from 'react'
import Modal from '../customcomponents/Modal'

const ModalExample = () => {
  const [modal, setModal] = useState(false)
  const modalHandler = () =>{
    setModal((prev)=>!prev)
  }



  return (
    <div className='' >
      <h1>Modal Example</h1>
      <button onClick={modalHandler} className='bg-indigo-400 px-3 py-2 rounded-lg' > OpenModal</button>
      <Modal
        openModal={modal}
        closeModal={() => setModal(false)}
        className="bg-red-400 px-24 py-24"
      >
        This is Modal
      </Modal>
      </div>

  )
}

export default ModalExample
