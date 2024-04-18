import { React } from 'react';
import '../styles/layout.css';
import fb from '../Images/facebook.png';
import x from '../Images/x.png';
import insta from '../Images/insta.png';
import li from '../Images/linkedin.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="icons">
                <a href="https://www.facebook.com/QAltd/" target="_blank"><img id="fb" name="socialIcon" alt="FB" src={fb}></img></a>
                <a href="https://twitter.com/QA_Ltd" target="_blank"><img id="x" name="socialIcon" alt="X" src={x}></img></a>
                <a href="https://www.instagram.com/qalimited/" target="_blank"><img id="insta" name="socialIcon" alt="INSTA" src={insta}></img></a>
                <a href="https://uk.linkedin.com/company/qa-ltd/jobs" target="_blank"><img id="li" name="socialIcon" alt="LI" src={li}></img></a>
            </div>
            <p class="footerText">© QA Properties Ltd. All Rights Reserved. </p>
        </div>
    );
}

export default Footer;