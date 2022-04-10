import React from 'react';

 const Skills = () => {
  return (
    <div className = 'skills contentPadding' id = 'skillInfo'>
       <p className = 'sub_heading'>Technical Skills:</p> 
       <div className = 'table'>
         <table className = 'table_content'>
          <tbody>
            <tr>
              <td className = 'table_left'>Programming Languages</td>
              <td className = 'table_right'>C, HTML5</td>
            </tr>
            <tr>
              <td className = 'table_left'>Web Technologies</td>
              <td className = 'table_right'> CSS3, JavaScript</td>
            </tr>
            <tr>
              <td className = 'table_left'>Frameworks</td>
              <td className = 'table_right'>Bootstrap ,Jquery and React JS </td>
            </tr>
            <tr>
              <td className = 'table_left'>RIA Development Tools</td>
              <td className = 'table_right'> Visual Studio</td>
            </tr>
            <tr>
              <td className = 'table_left'>Operating Systems</td>
              <td className = 'table_right'> Windows </td>
            </tr>
          </tbody>
         </table>
       </div>
    </div>
  )
}
export default Skills;