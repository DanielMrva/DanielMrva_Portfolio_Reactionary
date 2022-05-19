import React from "react";

function projectCard( {projects}) {
    return (
        <div>
            {projects.map(project => (
            <div className="card">
                <div className="card-image">
                    <img src={`./assets/images/${project.image}`}/>
                    <span className="card-title">{project.name}</span>
                </div>
                <div className="card-content">
                    <p>{project.desc}</p>
                </div>
                <div className="card-action">
                    <a href={project.git}>Repository</a>
                    <a href={project.dep}>Deployed</a>
                </div>
            </div>
            ))}
        </div>
    )
}

export default projectCard;

