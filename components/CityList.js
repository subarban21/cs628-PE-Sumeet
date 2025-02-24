import React from "react";
import { Link } from "react-router-dom";

function CityList({ cities }) {


    return (
        <div>
            <h2 className='sub-title'>Cities List</h2>
            <ul>
                {/* Cycles through each city in the cities array and then display them in a list item <li> */}
                {cities.map((city) => (
                    <li className='city-list' key={city.id}>
                    {/* the unique id city.id is stored in the key so that it can be associated with the city. */}
                        {/* Displays the city details when clicked on the specified city */}
                        <Link to={`/cities/${city.id}`}>{city.name}</Link>
                        {/* When a city is clicked the unique identifier with that city */}
                        {/*in the URL so if Los Angeles is click in the list, the unique identifier is 3*/}
                        {/* the url will say /cities/3 */}


                    </li>
                ))}
            </ul>

        </div>
    );
}

export default CityList;
