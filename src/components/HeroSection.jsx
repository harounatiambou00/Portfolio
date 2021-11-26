import React from 'react'
import styled from 'styled-components'
import CheckMyWorkButton from './CheckMyWorkButton'
import Typed from 'react-typed'

const Name = styled.h2`
    color : #FFA41B;
    font-family : "Audiowide" , sans-serif;
`

const HeroSection = () => {
    return (
        <div className="HeroSection">
            <div className="Description">
                <h3>Hi,I'm</h3>
                <Name>
                    H. TIAMBOU<br />
                    Abdoul Wahabou
                </ Name>
                <h4>
                    I am a young student from Niger who is passionate about IT.<br />
                    I' m a fullsatack developper since 2020. My favorite <br />
                    technoligies are : <br />
                    <Typed
                        className="Description_Technologies"
                        strings={["ASP .NET", "React JS", "Laravel8", "HTML5", "CSS3", "C#"]}
                        typeSpeed = {40}
                        backSpeed = {60}
                        loop
                    >

                    </Typed>
                </h4>
            </div>
            <CheckMyWorkButton />
        </div>
    )
}

export default HeroSection