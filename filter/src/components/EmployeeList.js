import React from 'react'

import '../App.css'


const EmployeeList = ({details, sorting}) => {

  return (
      <div className='tbl'>
           <table>
             <thead>
               <tr>
                 <th>ID</th>
                 <th className='hov' onClick={() => sorting("name")} title={"Click to sort"}>Employee-Name</th>
                 <th>E-mail</th>
                 <th>Date-Of-Joining</th>
                 <th>Contact-No.</th>
                 <th className='hov' onClick={() => sorting("city")} title={"Click to sort"}>City</th>
               </tr>
             </thead>
             <tbody>
               {
                details.map((detail) => {
                  let date = new Date(detail["doJ"]);
                  return <tr key={detail["id"]}>
                    <td>{detail["id"]}</td>
                    <td>{detail["name"]}</td>
                    <td>{detail["email"]}</td>
                    <td>{date.toLocaleDateString()}</td>
                    <td>{detail["contact"]}</td>
                    <td>{detail["city"]}</td>
                  </tr>
                })}
            </tbody>
          </table>
        </div>
  )
}

export default EmployeeList
