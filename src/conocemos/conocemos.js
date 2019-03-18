import React from 'react';
import './conocemos.css'
import pic from '../assets/images/Jose-e-Irma-silva.jpg'

export default class Conocemos extends React.Component{
    render(){
        return (
            <div className="conocemos">
                <h1 className="con-title">HISTORIA</h1>
                <p className="con-p">El Ministerio Jesús es la Roca nace cuando Dios le hace el llamado al Pastor José Silva y su esposa Irma Silva en Febrero de 1999, con un plan de formar discípulo que nacieran dentro de la misma obra.</p>
                <img src={pic} alt="pastor silva r irma silva" className="historia-pic"/>
            </div>
        )
    }
}