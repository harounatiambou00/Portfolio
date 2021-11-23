import React from 'react'
import styled from 'styled-components'

const Brand = styled.div`
    font-family: "Nosifer", cursive;
    font-weight: bolder;
    color: #FFA41B;
`

const Header = styled.div`
    background-color: #1A2238;
    margin : 0px;
    font-family : "Audiowide", sans-serif;
    color : #CDD0CB;
`

const Navbar = () => {
    return(
        <Header>
            <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container p-0">
                <a className="navbar-brand" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
                    <Brand className="fs-2">TIAMTECH</Brand>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-lg-flex flex-row justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-lg-2">
                            <a className="nav-link active text-warning" aria-current="page" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">Home</a>
                        </li>
                        <li className="nav-item mx-lg-2">
                            <a className="nav-link" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">About Me</a>
                        </li>
                        <li className="nav-item mx-lg-2">
                            <a className="nav-link" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">Mes Services</a>
                        </li>
                        <li className="nav-item mx-lg-2">
                            <a className="nav-link" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">PortFolio</a>
                        </li>
                        <li className="nav-item mx-lg-2">
                            <a className="nav-link" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </Header>
    );
}

export default Navbar