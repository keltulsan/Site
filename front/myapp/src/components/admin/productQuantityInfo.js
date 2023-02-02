import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Login_ } from "../login_signup/LogiN";
import { useForm } from "react-hook-form";
import { GetProduct_ } from "../../api/GetProduct";
import React, { Component, useEffect, useState } from 'react';
import { ProductQuantity } from "./productQuantity"

export function ProductQuantitytAdmin(props){
    const [info,setInfo]=useState([]);
    useEffect(() => {
        const info = GetProduct_();
        info
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
        console.log(info)
    }, []);
    return <Modal animation={true} show={props.showModalProductQuantity} onHide={props.handleCloseModalProductQuantity}>
        {console.log(info)}
        <Modal.Body>
            <ProductQuantity info={info}/>
        </Modal.Body>
        </Modal>}