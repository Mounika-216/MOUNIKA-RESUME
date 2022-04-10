import React from 'react';


const PersonalInfo = () => {
  return (
    <div className = 'personal-info' id = 'personalInfo'>
        <p className = 'sub_heading'>Professional Summary: </p>
        <ul className = 'personal-list'>
            <li className = 'listItem'>Highly motivated and focussed in Web Development.</li>
            <li className = 'listItem'>Experience in the making of interactive websites with <span className = 'textHighlighter'>Responsive Design </span>which supports all devices</li>
            <li className = 'listItem'>Experienced in Remote data via REST APIs and JSON</li>
            <li className = 'listItem'>Experienced in the JavaScript frameworks <span className = 'textHighlighter'>React JS. </span></li>
            <li className = 'listItem'>Experienced integrating third party libraries.</li>
            <li className = 'listItem'>Good Debugging skills towards finding the bugs and fixing by applying multiple ideas to dig the issues.</li>
            <li className = 'listItem'>Experience in GitHub using command line interfaces.</li>
            <li className = 'listItem'>Excellent interpersonal, analytical and communication skills and the ability to work efficiently, & quickly learning and ability to work with new Technologies to fulfil project needs.</li>
        </ul>

    </div>
  )
}
export default PersonalInfo;