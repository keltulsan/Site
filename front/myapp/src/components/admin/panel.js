import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { UserListAdmin } from './userList';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export function PanelAdmin(props){
    const InputComponent = () => {
        const inputElement = React.useRef()
    
        return <input ref={inputElement} />
    }
    return <Modal  onExit={props.handleCloseModal}
    keyboard={true} show={props.showModal} onHide={props.handleCloseModal}>
          <Modal.Title>Panel Admin</Modal.Title>

          <p variant="primary" onClick={()=>{props.handleCloseModal();props.handleShowModalUser()}}>
            User list
          </p>
          <p variant="primary" onClick={()=>{props.handleCloseModal();props.handleShowModalBusiness();InputComponent.click()}}>
            Business list
            </p>
            <p variant="primary" onClick={()=>{props.handleCloseModal();props.handleShowModalFaq();InputComponent.click()}}>
            FAQ list
            </p>
      </Modal>
}