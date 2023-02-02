import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Login_ } from "../login_signup/LogiN";
import { useForm } from "react-hook-form";
import { GetNews_ } from "../../api/GetNews";
import React, { Component, useEffect, useState } from 'react';
import { NewsListInfo } from "./newsinfo"

export function NewsListAdmin(props){
    const [info,setInfo]=useState([]);
    useEffect(() => {
        const info = GetNews_();
        info
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
        console.log(info)
    }, []);
    return <Modal animation={true} show={props.showModalNews} onHide={props.handleCloseModalNews}>
        {console.log(info)}
        <Modal.Body>{info && info.map((info,key)=>{
            return <div key={info.id}><NewsListInfo info={info}/></div>})}
        </Modal.Body>
        </Modal>}