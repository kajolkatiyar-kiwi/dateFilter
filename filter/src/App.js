import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
// import React from 'react-scripts'

// import ReactDOM from 'react-dom';
// import ReactPaginate from 'react-paginate';
// import SearchBar from './SearchBar';


function App() {
  const [order, setOrder] = useState("ASC");
  // const [searchResults, setSearchResults] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [details, setDetails] = useState([]);
  const [alldetails, setAllDetails] = useState([]);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  useEffect(() => {
    axios
      .get("https://63dcf998df83d549ce97a7ea.mockapi.io/empDetails")
      .then((response) => {
        setDetails(response.data);
        setAllDetails(response.data);
        // console.log(response.data);
       

      })
  }, []);

  const handleChange = (item) => {
    setState([item.selection]);
    setStartDate(item.selection.startDate);
    setEndDate(item.selection.endDate);

    let filtered = alldetails.filter((detail) => {
      let joinDate = new Date(detail["doJ"]);
      return joinDate >= item.selection.startDate && joinDate <= item.selection.endDate
    })
    console.log(startDate);
    console.log(endDate);
    setDetails(filtered);
  }

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

  // const [users, setUsers] =  useState([]);

  // const getUsers = async () => {
  //   const response = await fetch('https://63dcf998df83d549ce97a7ea.mockapi.io/products');

  //   // const data = await response.json();
  //   // console.log(data);

  //   setUsers(await response.json());
  // }

  // useEffect(() => {
  //   getUsers();
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
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
        
        {/* <SearchBar alldetails={alldetails} setSearchResults={setSearchResults} /> */}
        <div className='tablediv'>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th className='hov' onClick={() => sorting("name")}>Employee-Name</th>
                <th>E-mail</th>
                <th>Date-Of-Joining</th>
                <th>Contact-No.</th>
                <th className='hov' onClick={() => sorting("city")}>City</th>
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
      </header>
    </div>
  );
}


export default App;
