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
        <Header>
            <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container p-0">
                <a className="navbar-brand" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
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
                            <a className="nav-link" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">My Services</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#Portfolio_Section">PortFolio</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">Contact Me</a>
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