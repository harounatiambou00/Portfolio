import React from 'react'

const Project = (props) => {
    return(
        <div className="col-12 col-lg-3 mb-2 mb-lg-5 text-center">
            <div class="card">
            <img src={props.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Technologies : {props.technologies}</li>
                <li class="list-group-item"></li>
            </ul>
            <div class="card-body">
                <a href={props.GithubRepsitory} class="card-link btn btn-dark"><i class="fab fa-github"></i>  Github repository</a>
            </div>
            </div>
        </div>
    );
}

export default Project