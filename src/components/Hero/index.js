import React from 'react';
import Navbar from '../Navbar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Enjoy the yummness of true bakery</HeroH1>
                    <HeroP>Fresh bread, fresh life</HeroP>
                    <HeroBtn>Order Now</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
