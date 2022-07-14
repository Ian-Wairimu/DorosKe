import React from 'react';
import MainFooter from "./MainFooter";
import SocialFooter from "./SocialFooter";
import LegalFooter from "./LegalFooter";
import "./styles/footer.css";

const Footer = () => {
    return(
        <>
            <footer>
                <MainFooter />
                <SocialFooter />
                <LegalFooter />
            </footer>
        </>
    );
}

export default Footer;