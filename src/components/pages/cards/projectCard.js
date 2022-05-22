import React from "react";

function ProjectCard(props) {
    return (

    <div className="card sticky-action col s12 m6" key={props.id}>
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator card-img" src={props.image} alt=""/>
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{props.name}<i className="material-icons right">more_vert</i></span>
            <a href={props.git}>Repository</a>
            <br></br>
            <a href={props.dep}>Deployed</a>
        </div>
        <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{props.name}<i class="material-icons right">close</i></span>
            <p>{props.desc}</p>
        </div>
    </div>
    )
}

export default ProjectCard;

//previous card version:

// function ProjectCard(props) {
//     return (

//             <div className="col s12 m6">
//                 <div className="card " key={props.id}>
//                     <div className="card-image">
//                         <img src={props.image} alt="" className="card-img"/>
//                         <span className="card-title">{props.name}</span>
//                     </div>
//                     <div className="card-content">
//                         <p>{props.desc}</p>
//                     </div>
//                     <div className="card-action">
//                         <a href={props.git}>Repository</a>
//                         <a href={props.dep}>Deployed</a>
//                     </div>
//                 </div>
//             </div>
//             )
// }