import React from "react"
import { Link } from "react-router-dom"
import { links } from "../App";

export function Robot() {
    const link = links();
    return<div className=" fixed container flex right-f">
  
        <Link to={link.homeFull}><img className="robot" src="./img/bot.png" alt="Image du chatbot sur Eko"/></Link>

    </div>
}