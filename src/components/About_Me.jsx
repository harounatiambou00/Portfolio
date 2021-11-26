import React from 'react'
import AboutMeSectionImg from '../assets/AboutMeSection.png'

const AboutMe = () => {
    return(
        <div id="About_Me_Section" className="container">
            <div className="col-12 Section_Title my-3 p-auto fs-2">
                About Me
            </div>
            <div className="row">
                <div className="col-12 col-md-6 mb-5 mb-lg-0 text-center pt-lg-5">
                    <div class="card text-white rounded-pill" >
                        <img src={AboutMeSectionImg} height="500px" class="card-img rounded-pill" alt="..." />
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text"></p>
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