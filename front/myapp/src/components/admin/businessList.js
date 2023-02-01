import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Login_Business_ } from "../../components/login_signup/LogiNBusiness";
import { useForm } from "react-hook-form";
import { Update_ } from "../../components/update_acc/Update";
import React, { Component, useEffect, useState } from 'react';
import { EnterprisePage } from "./businessinfo"

export function BusinessListAdmin(props){
    const [info,setInfo]=useState([]);
    useEffect(() => {
        const info = Login_Business_();
        info
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
        console.log(info)
    }, []);
    return <Modal show={props.showModalBusiness} onHide={props.handleCloseModalBusiness}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        {console.log(info)}
        <Modal.Body>{info && info.map((info,key)=>{
            return <div key={info.id}><EnterprisePage info={info}/></div>
        })}
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">
            salut
          </Button>
        </Modal.Footer>
      </Modal>
}