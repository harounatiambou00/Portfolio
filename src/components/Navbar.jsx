import React from 'react'
import styled from 'styled-components'
import Typed from 'react-typed';


const Header = styled.div`
    background-color: #1A2238;
    margin : 0px;
    font-family : "Audiowide", sans-serif;
    color : #CDD0CB;
    z-index: 999999999;
`

const Navbar = () => {
    return(
        <Header id="Header_Section">
            <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container p-0">
                <a className="navbar-brand" href="#HeaderSection">
                   <Typed 
                        className="Brand"
                        strings={["Harouna", "TIAMBOU", "Abdoul", "Wahabou"]}
                        typeSpeed = {40}
                        backSpeed = {60}
                        loop
                   /> 
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-lg-flex flex-row justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-2">
                            <a className="nav-link active text-warning" aria-current="page" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">Home</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#About_Me_Section">About Me</a>
                        </li>
                        <li className="nav-item mx-2">
                            <button className="nav-link btn" data-bs-toggle="modal" data-bs-target="#My_Service_Not_Started_Popup">My Services</button>
                            <div class="modal fade" id="My_Service_Not_Started_Popup" tabindex="-1" aria-labelledby="My_Service_Not_Started_Popup_Label" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content" id="My_Service_Not_Started_Popup_Content">
                                        <div class="modal-header">
                                            <h4 class="modal-title text-dark fs-3" id="My_Service_Not_Started_Popup_Label">Sorry I haven't started yet working yet.</h4>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body fs-6">
                                            I didn't start selling my services because of the lack of time.
                                            As I am a student, it is impossible for me to attack both fronts.
                                            But if you want some little services like frontend development in holidays I can help you.
                                            So <em><a href="#ContactMe_Section ">Contact me</a></em>   <i class="fas fa-smile-wink"></i>
                                        </div>
      
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#Portfolio_Section">PortFolio</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#ContactMe_Section">Contact Me</a>
                        </li>
                        <li className="nav-item mx-2" id="Social_Media_Icons">
                            <div className="LinkedIn_Icon">
                                <a target="_blank" href="https://www.linkedin.com/in/abdoul-wahabou-harouna-tiambou-475099210/" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                            <div className="Github_Icon">
                                <a target="_blank" href="https://github.com/harounatiambou00" rel="noreferrer"><i class="fab fa-github"></i></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </Header>
    );
}

export default Navbar