"use client"
import React, { useEffect, useRef } from 'react';

const Modal = ({ openModal, closeModal, children, className }) => {
  const ref = useRef(null);

  useEffect(() => {
    openModal ? ref.current?.showModal() : ref.current?.close();
  }, [openModal]);

  const handleOverlayClick = () => {
    closeModal();
    console.log('handleOverlayClick')
  };

  return (
    <dialog ref={ref} className={`${className}`}>
      <div  className="fixed inset-0 flex items-center justify-center">
        <div onClick={handleOverlayClick} >
        {children}
        </div>
        <button onClick={closeModal}>
          Close
        </button>
      </div>
    </dialog>
  );
}

export default Modal;
