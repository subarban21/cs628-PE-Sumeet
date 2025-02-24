import React from 'react';
import { useParams } from 'react-router-dom';

function CityDetails({ cities }) {

    // useParams extracts URL parameters
    const { id } = useParams();

    // cities.find will search for the city associated with the id that is in the url
    // and the .toString() converts it from a number value to a string
    const city = cities.find((c) => c.id.toString() === id);



   //Below will return the cities in the array dynamically//
    return (
        <div>
            {/*city.name will display the name of the city*/}
            <h2>{city.name} Details</h2>
            <p>
                {/*city.country will display the Country that the city is located in */}
                <h2>Country: </h2> {city.country}
            </p>
            <p>
                {/*city.population will display the current population*/}
                <h2>Population: </h2>{city.population}
            </p>
        </div>
    );
}


export default CityDetails;