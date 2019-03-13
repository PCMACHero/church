import React from 'react'
import './testimonios.css'

export default class Testimonios extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div className="trap">
                <div className="testimonios">
                <h2>TESTIMONIOS</h2>
                <div className="test-user">
                    <div className="test-pic" style={{backgroundImage:`url(${this.props.pic})`}}></div>
                    <div className="test-name">{this.props.name}</div>
                </div>
                <div className="test-content ">
                    <h2 
                    // style={{color:"green"}}
                    >{this.props.title}</h2>
                    <p>"{this.props.text}"</p>
                </div>
            </div>
                </div>
            

            </React.Fragment>
            
        )
    }
}