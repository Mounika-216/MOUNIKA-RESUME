import React from 'react';
import Introduction from './Introduction';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import ProjectsWorkedOn from './ProjectsWorkedOn';
import PersonalDetails from './PersonalDetails';
import Declaration from './Declaration';
import '../styles/navbar.css';
const Mainpage = () => {
 return(
     <div className="mainpage">
        <div className="sidebar"> 
            <ul className = "sidebar_menu">
                <li> <a href="#personalInfo"> Professional Summary</a> </li>
                <li> <a href="#educationInfo"> Educational Qualification</a> </li>
                <li> <a href="#experienceInfo"> Work Experience</a> </li>
                <li> <a href="#skillInfo"> Technical Skills</a> </li>
                <li> <a href="#projectInfo"> Projects Worked</a> </li>
                <li> <a href="#personalInformation"> Personal Details</a> </li>
                <li> <a href="#declarationInfo"> Declaration</a> </li>
            </ul>
        </div>
        <div className="content">
            <div className="contentContainer">
                <Introduction/>
                <PersonalInfo/>
                <Education/>
                <Experience/>
                <Skills/>
            </div>
           <div className="contentContainer">
           <div className="contentContainer1">
                <ProjectsWorkedOn />
                <PersonalDetails/>
                <Declaration/>
                </div>
           </div>
        </div>
        <div className="space">

        </div>
     </div>
 )
}
export default Mainpage;