import React from "react"
import { Link } from "react-router-dom"

export function Robot() {
    return<div className="container flex max-height fixed right">
    <div className="flex align-bot">
        <Link to="/"><img className="robot" src="./img/bot.png" alt="Image du chatbot sur Eko"/></Link>
    </div>
    </div>
}