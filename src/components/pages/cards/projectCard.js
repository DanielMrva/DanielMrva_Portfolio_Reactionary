import React from "react";

function projectCard(props) {
    return (

            <div className="card" key={props.id}>
                <div className="card-image">
                    <img src={`./assets/images/${props.image}`}/>
                    <span className="card-title">{props.name}</span>
                </div>
                <div className="card-content">
                    <p>{props.desc}</p>
                </div>
                <div className="card-action">
                    <a href={props.git}>Repository</a>
                    <a href={props.dep}>Deployed</a>
                </div>
            </div>
            )
}

export default projectCard;

