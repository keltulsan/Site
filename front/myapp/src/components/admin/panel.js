import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { UserListAdmin } from './userList';
import { useState } from 'react';
export function PanelAdmin(props){
    return <Modal show={props.showModal} onHide={props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleShowModalUser}>
            User list
          </Button>
          <Button variant="primary" onClick={props.handleShowModalBusiness}>
            Business list
          </Button>
        </Modal.Footer>
      </Modal>
}