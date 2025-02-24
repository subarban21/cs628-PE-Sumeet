import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCity({ setCities, cities }) {
    // two props are received one to set the cities and and current list of cities


    const [city, setCity] = useState("");
    // Stores the city name in setCity

    // Stores the city the country is located in setCountry
    const [country, setCountry] = useState("");

    // Stores the city population  in setPopulation
    const [population, setPopulation] =useState("");


    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // using a conventioanl method with setting date.now value for a unique id, gave unknown issues
        // resorted to get the length of the array and then using Math.max to get the highest
        // value id in the array even if the array may have 4 values and one ID says 8, Math.max will
        // use that 8 and then move to the next value which is 9 to assign it to the city.
        const maxId = cities.length > 0 ? Math.max(...cities.map(c => c.id)) : 0;

        const newCity = {
            id: maxId + 1,  // once it returns the highest ID value, +1 is added to the value to get a new id
            name: city,
            country: country,
            population: population
        };
        // Adds the new city you created to the list
        setCities((prevCities) => [...prevCities, newCity]);

        // This will redirect the user back to the city list once they click the add city
        // button after they input the city details
        navigate("/cities");
    };


    return (
        <div>
            <h2>Add a New City</h2>
            <form onSubmit={handleSubmit}>

                {/* What the user types will be set to city and the required field will make sure the form */}
                {/* does not submit until it is filled out*/}
                <label>City Name: <input value={city} onChange={(e) => setCity(e.target.value)} required /></label>
                <br />

                {/* What the user types will be set to country and the required field will make sure the form */}
                {/* does not submit until it is filled out*/}
                <label>Country: <input value={country} onChange={(e) => setCountry(e.target.value)} required /></label>
                <br />

                {/* What the user types will be set to population and the required field will make sure the form */}
                {/* does not submit until it is filled out*/}
                <label>Population: <input value={population} onChange={(e) => setPopulation(e.target.value)} required /></label>
                <br />
                <button type="submit">Add City</button>
            </form>
        </div>
    );
}

export default AddCity;