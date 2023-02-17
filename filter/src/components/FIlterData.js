import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

import DateSelector from './DateSelector'
import EmployeeList from './EmployeeList'

const FilterData = () => {

    const [details, setDetails] = useState([]);
    const [allDetails, setAllDetails] = useState([]);

    const [order, setOrder] = useState("ASC");
    
    useEffect(() => {
        axios
          .get("https://63dcf998df83d549ce97a7ea.mockapi.io/empDetails")
          .then((response) => {
            setDetails(response.data);
            setAllDetails(response.data); 
          })
      }, []);

      const sorting = (col) => {
        if (order === "ASC") {
          const sorted = [...details].sort((a, b) =>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
          );
          setDetails(sorted);
          setOrder("DESC");
        }
    
        if (order === "DESC") {
          const sorted = [...details].sort((a, b) =>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
          );
          setDetails(sorted);
          setOrder("ASC");
        }
    
      }

  return (
    <div>
      <DateSelector allDetails={allDetails} setDetails={setDetails}/>
      <EmployeeList sorting={sorting} details={details}/>
    </div>
  )
}

export default FilterData
