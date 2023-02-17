import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({resultsArray, setSearchResults, alldetails}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(alldetails)

    const resultsArray = alldetails.filter((detail) => {
      
      // setSearchResults(detail.name.includes(e.target.value));
      console.log(detail.name.includes(e.target.value));
      
    })

    setSearchResults(resultsArray);
  }
  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <input type='text' onChange={handleSearchChange} />
          <button type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          {/* <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button> */}
        </form>
      </header>
    </div>
  )
}

export default SearchBar
