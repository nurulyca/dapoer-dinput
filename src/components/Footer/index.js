import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, MDBContainer } from './FooterElement';


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/"> Dapoer Dinput </SocialLogo>
                        <SocialIcons>
                            <SocialIconLink  href="https://www.instagram.com/dapoerdinput/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
                
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <span onClick={() => {
                            window.location.href = "https://www.kewebin.id"
                        }} style={{ color: 'red', textDecoration: 'inherit'}} > Kewebin </span>
                    </MDBContainer>
                </div>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
