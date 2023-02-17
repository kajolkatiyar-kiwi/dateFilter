import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import React, { useState} from 'react'
import '../App.css'


const DateSelector = ({ setDetails, allDetails}) => {

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);


  const handleChange = (item) => {
    setState([item.selection]);

    let filtered = allDetails.filter((detail) => {
      let joinDate = new Date(detail["doJ"]);
      return joinDate >= item.selection.startDate && joinDate <= item.selection.endDate
    })
    setDetails(filtered);
  }

  return (
    <div>
      <DateRangePicker
        className='calender'
        onChange={handleChange}
        // showSelectionPreview={true}
        // moveRangeOnFirstSelection={false}
        // months={2}
        ranges={state}
      // direction="horizontal"
      // preventSnapRefocus={true}
      // calendarFocus="forwards"
      />
    </div>
  )
}

export default DateSelector


