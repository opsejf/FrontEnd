import { React } from 'react';
import '../styles/aboutUs.css';

import male from '../Images/maletemplate.jpg';
import female from '../Images/femaletemplate.jpg';
import woman1 from '../Images/woman1.jpg';
import man2 from '../Images/man2.jfif';
import woman2 from '../Images/woman2.jfif';
import man3 from '../Images/man3.jpg';
import man4 from '../Images/man4.jfif';

function contact(){
    return(
        <div>
            <img src=''/>
        </div>
    )
}


let AboutUs = () => {
    return (
        <div>
        <br />
            <div className='banner'>
                <br />
                <h1>About us</h1>
                <br />

                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            
            <br />
            <h2>Meet The Team!</h2>
            <div className="sectionPerson">
                <br />
                <h3>Properties Manager - Adam Thompson</h3>
                <img className="employee" src={man4}></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br />
            </div>
            <br />

            <div className="sectionPerson">
                <br />
                <h3>Estate Advisor - Leanne Smith</h3>
                <img className="employee" src={woman1}></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br />
            </div>
            <br />

            <div className="sectionPerson">
                <br />
                <h3>Online Manager - Tracy Blythe</h3>
                <img className="employee" src={woman2}></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br />
            </div>
            <br />

            <div className="sectionPerson">
                <br />
                <h3>Realtor - Gary Norman</h3>
                <img className="employee" src={man2}></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br />
            </div>
            <br />
            <br />
            <br />
            
            
            
        </div>
    )
}

export default AboutUs;