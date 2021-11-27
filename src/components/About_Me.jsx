import React from 'react'
import AboutMeSectionImg from '../assets/AboutMeSection.png'

const AboutMe = () => {
    return(
        <div id="About_Me_Section" className="container">
            <div className="col-12 Section_Title my-3 p-auto fs-2">
                About Me
            </div>
            <div className="row">
                <div className="col-12 col-md-6 mb-5 mb-lg-0 text-center">
                    <div class="alert alert-info p-1 d-flex align-items-center text-center" role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-info-square-fill flex-shrink-0 me-2" viewBox="0 0 16 16">
                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>
                        <div>
                            Click on the image to have more information about me.
                        </div>
                    </div>
                    <div id="AboutMeImgCard" class="card text-white rounded-pill" >
                        <img id="AboutMeImg" src={AboutMeSectionImg} height="500px" class="card-img rounded-pill" alt="..." />
                        <div id="AboutMeImgOverlay" class="card-img-overlay rounded-pill">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                                I am a young student from Niger who is passionate about IT.<br />
                                Currently, I am preparing a three years degree in software engineering at the Faculty of Sciences of Monastir in Tunisia.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 text-center">

                    <div className="mb-5 fw-bold fs-4">My main skills       <i class="fas fa-code text-success"></i></div>

                    <span id="HTML_Bar_Span"><i class="fab fa-html5"></i>  HTML5</span>
                    <div id="HTML_Bar_Progress" className="progress mb-4">
                        <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                    </div>

                    <span id="CSS_Bar_Span"><i class="fab fa-css3-alt"></i>  CSS3</span>
                    <div id="CSS_Bar_Progress" className="progress mb-4">
                        <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                    </div>

                    <span id="Bootstrap_Bar_Span"><i class="fab fa-bootstrap"></i>  Bootstrap 5</span>
                    <div id="Bootstrap_Bar_Progress" className="progress mb-4">
                        <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                    </div>

                    <span id="JavaScript_Bar_Span"><i class="fab fa-js"></i>  JavaScript</span>
                    <div id="JavaScript_Bar_Progress" className="progress mb-4">
                        <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                    </div>

                    <span id="React_Bar_Span"><i class="fab fa-react"></i>  React JS</span>
                    <div id="React_Bar_Progress" className="progress mb-4">
                        <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                    </div>

                    <span id="Laravel_Bar_Span"><i class="fab fa-laravel"></i>  Laravel 8</span>
                    <div id="Laravel_Bar_Progress" className="progress mb-4">
                        <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                    </div>

                    <span id="Csharp_Bar_Span">C#</span>
                    <div id="Csharp_Bar_Progress" className="progress mb-4">
                        <div className="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>

                    <span id="ASP_Bar_Span">ASP .NET</span>
                    <div id="ASP_Bar_Progress" className="progress mb-4">
                        <div className="progress-bar w-25 bg-secondary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe