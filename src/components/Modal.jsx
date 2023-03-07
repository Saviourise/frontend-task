import React, { useState } from 'react';
import '../styles/Modal.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux'
import { close } from '../features/ModalSlice'
import { setData } from '../features/ModalInfo'
import ButtonComponent from './Button';

const ModalComponent = () => {
  const modal = useSelector((state) => state.modal.value)
  const modalInfo = useSelector((state) => state.modalInfo.value)
  
  const dispatch = useDispatch()

  const handleClose = () => dispatch(close());
  return (
    <>

      <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalInfo.payload.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding: 0}}>
          <div className="modalImgContainer">
            <img className="modalImg" src={modalInfo.payload.img} alt={modalInfo.payload.name} />
            </div>
        </Modal.Body>
        <Modal.Body  style={{padding: 0}}>
          <div className="modalInfo">
            <h5>
              <span>Collection: </span>
            <span>{modalInfo.payload.collection}</span>
          </h5>
            <h5>
              <span>Volume: </span>
                <span> {modalInfo.payload.volume}</span>
            
              <span>Wallet: 
                <span> {modalInfo.payload.wallet}</span>
                </span>
      </h5>
      <h5>
              <span>Floor: </span>
                <span> {modalInfo.payload.floor}</span>
            
              <span>Owners: 
              <span> {modalInfo.payload.owners}</span>
              </span>
            </h5>
          </div>
        </Modal.Body>
        <Modal.Body  style={{padding: 0}}>
           <div className="modalInfo">
            <ButtonComponent color={"var(--color-2)"} link={modalInfo.payload.name} />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor: "var(--color-5)", border: "none"}} onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalComponent