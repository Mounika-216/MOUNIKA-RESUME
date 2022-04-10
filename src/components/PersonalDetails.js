 import React from 'react'; 
const PersonalDetails = () => {
   return (
     <div className = "personal-details contentPadding" id = "personalInformation">
           <p className = 'sub_heading'>Personal Details: </p>
           <div className = 'table'>
         <table className = 'table_content'>
          <tbody>
            <tr>
              <td className = 'table_left'>Name</td>
              <td className = 'table_right'>Mounika Palle</td>
            </tr>
            <tr>
              <td className = 'table_left'>Father’s Name</td>
              <td className = 'table_right'> Venkata Reddy</td>
            </tr>
            <tr>
              <td className = 'table_left'>Date Of Birth</td>
              <td className = 'table_right'>03-10-1994</td>
            </tr>
            <tr>
              <td className = 'table_left'>Sex</td>
              <td className = 'table_right'>Female</td>
            </tr>
            <tr>
              <td className = 'table_left'>Nationality</td>
              <td className = 'table_right'> Indian </td>
            </tr>
            <tr>
              <td className = 'table_left'>Marital Status</td>
              <td className = 'table_right'> Married </td>
            </tr>
            <tr>
              <td className = 'table_left'>Languages Known</td>
              <td className = 'table_right'>English,  Telugu, Hindi </td>
            </tr>
            <tr>
              <td className = 'table_left'>Hobbies</td>
              <td className = 'table_right'> Listening to Music,Pencil sketching </td>
            </tr>
          </tbody>
         </table>
       </div>
     </div>
   )
 }
 export default PersonalDetails;