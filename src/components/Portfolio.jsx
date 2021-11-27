import React from 'react'
import PortfolioProjectImg from '../assets/PortfolioProjectImg.png'
import TiamTaskProjectImg from '../assets/TiamTaskProjectImg.png'
import TiamShopProjectImg from '../assets/TiamShopProjectImg.png'
import InfoSchoolProjectImg from '../assets/InfoSchoolProjectImg.png'
import Project from './ProjectCard';

const Portfolio = () => {
    return(
        
        <div className="container-fluid pt-2">
            <div id="Portfolio_Section" className="col-12 Section_Title my-3 p-auto fs-2">
                My recent work
            </div>
            <div className="col-12 text-center fs-4">
                Here are some projects I have been working on recently and that i'm proud of.<i class="fas fa-smile-wink text-secondary"></i>
            </div>
            <div className="row pt-3">
                <Project name="Tiamtask" description="Tiamtask is a task managment web-appliction(CRUD operations).It's built with Laravel 8 the most popular framework of php." technologies="Laravel8, HTML5, CSS3, Bootstrap5, Blade ..."  image={TiamTaskProjectImg} GithubRepsitory="https://github.com/harounatiambou00/TiamTask"/>
                <Project name="Portfolio" description="This project is my personnal portfolio website.I've built it with React JS, a frontend library for Javascript developpers." technologies="React JS, HTML5, CSS3, Bootstrap 5..."  image={PortfolioProjectImg} GithubRepsitory="https://github.com/harounatiambou00/Portfolio" DomainName="http://localhost:3000/"/>
                <Project name="Tiamshop" description="Tiamshop is an e-commerce project that I started in September 2021.This is a frontend prototype that i've built for it." technologies="Bootstrap 5, HTML5, CSS3" image={TiamShopProjectImg} GithubRepsitory="https://github.com/harounatiambou00/Tiamshop" />
                <Project name="Info School" description="Info schoool is a basic e-learning website that we've made in a bootstrap tutorial.You can find the tutorial on Openclassrooms.com" technologies="Bootstrap 5, HTML5, CSS3" image={InfoSchoolProjectImg} GithubRepsitory="https://github.com/harounatiambou00/Infoschool"/>
            </div>
        </div>
        
    );
}

export default Portfolio