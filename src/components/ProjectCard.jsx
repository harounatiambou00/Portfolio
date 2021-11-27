import React from 'react'

const Project = (props) => {
    return(
        <div className="col-12 col-lg-3 mb-4 mb-lg-5 text-center">
            <div class="card">
                <img src={props.image} data-bs-toggle="modal" data-bs-target="#exampleModal" class="card-img-top" alt="..." />
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-xl">
                        <div class="modal-content">
                            <img src={props.image} alt="..." />
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Technologies : {props.technologies}</li>
                    <li class="list-group-item">
                        {props.DomainName ? <a href={props.DomainName} class="card-link btn btn-info"> <i class="fas fa-link"></i> Link to the website</a> : <a href={props.DomainName} disabled class="card-link btn btn-info opacity-25"><i class="fas fa-link"></i> Link to the website</a>}
                    </li>
                </ul>
                <div class="card-body">
                    <a href={props.GithubRepsitory} class="card-link btn btn-dark"><i class="fab fa-github"></i>  Github repository</a>
                </div>
            </div>
        </div>
    );
}

export default Project