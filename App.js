import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CityList from "./components/CityList";
import AddCity from "./components/AddCity";
import CityDetails from "./components/CityDetails";
import './components/Cities.css'

function App() {
// added a predefined cities array with unqiue id, name (City), country, and population
  const [cities, setCities] = useState([
    { id: 1, name: "Santa Maria", country: "USA", population: "100,000" },
    { id: 2, name: "Seattle", country: "USA", population: "797,700" },
    { id: 3, name: "Los Angeles", country: "USA", population: "3,820,914" },
    { id: 4, name: "Saigon", country: "Vietnam", population: "9,300,000"}
  ]);
  return (

      // wrapping all the details into the Router tag for navigation purposes/dynamic changes
      <Router>
        <div className='container'>
          <h1 className='h1-title'>Cities Application</h1>

          {/* Creating links at the top under the title Cities Application for user navigation*/}
          <nav>
            {/* Navigates to the city list */}
            <Link className='top-nav' to="/cities">Cities List</Link>
            <br />

            {/* navigates to the add city forme*/}
            <Link className='top-nav' to="/addcity">Add City</Link>
          </nav>

          <div className='main-content'>
          <Routes>
            <Route path="/cities" element={<CityList cities={cities} />} />
            {/* Once the user goes to the main site the CityList will be displayed (List of the cities)*/}

            <Route path="/addcity" element={<AddCity setCities={setCities} cities={cities}/>} />
            {/* the AddCity component will be displayed which contains the form for adding */}
            {/* the city name, country and population details */}

            <Route path="/cities/:id" element={<CityDetails cities={cities} />} />
            {/* the :id which capture values from the url */}
            {/* it will pass it to CityDetails so it can find the city based on the id*/}

          </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
