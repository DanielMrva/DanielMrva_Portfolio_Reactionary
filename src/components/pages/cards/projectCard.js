import React from "react";

function ProjectCard(props) {
    return (
    <div className=" col s12 m6">
        <div className="card medium sticky-action teal lighten-5" key={props.id}>
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator card-img responsive-img" src={props.image} alt=""/>
            </div>
            <div className="card-content teal lighten-5">
                <span className="card-title activator grey-text text-darken-4">{props.name}<i className="material-icons right">more_vert</i></span>
                <a href={props.git} target='_blank' rel="noreferrer">Repository</a>
                <br></br>
                <a href={props.dep} target='_blank' rel="noreferrer">Deployed</a>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 ">{props.name}<i class="material-icons right">close</i></span>
                <p>{props.desc}</p>
            </div>
        </div>
    </div>
    )
}

export default ProjectCard;
