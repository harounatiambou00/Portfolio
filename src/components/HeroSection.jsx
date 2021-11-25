import React from 'react'
import styled from 'styled-components'
import CheckMyWorkButton from './CheckMyWorkButton'

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
                    Currently, I am preparing a three years degree in software <br /> engineering at the Faculty of Sciences of Monastir in Tunisia.<br />
                </h4>
            </div>
            <CheckMyWorkButton />
        </div>
    )
}

export default HeroSection