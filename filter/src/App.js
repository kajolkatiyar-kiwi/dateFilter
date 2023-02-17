import React from 'react'
import './App.css'
import FilterData from './components/FIlterData';
// import SearchBar from './SearchBar';


function App() {
    // const [searchResults, setSearchResults] = useState([]);

    return (
        <div className="App">
            <header className="App-header">
                <FilterData/>
                {/* <SearchBar allDetails={allDetails} setSearchResults={setSearchResults} /> */}
            </header>
        </div>
    );
}


export default App;
