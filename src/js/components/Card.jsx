import React from "react";

const Card = (props) => {
    console.log(props)
   

    return (
        <div className="card" style={{width: "18rem", backgroundColor: props.color}}>
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.color} Mi nombre es  {props.nombre}</h5>
                    <p className="card-text">trabajo de {props.profesion}.</p>
                    <a href="#" className="btn btn-primary">mi pareja es {props.pareja}</a>
                </div>
                <div>
                    {props.children}
                </div>
        </div>
    )
}

export default Card