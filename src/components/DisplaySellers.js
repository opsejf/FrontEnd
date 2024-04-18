import { React, useState, useEffect } from 'react';
import '../styles/displayUsers.css';
import data from '../database/Properties.json';

const DisplaySellers = (props) => {
    const [sellerData, setSellerData] = useState([]);

    // Checking which page we are on to display either buyer or seller

        useEffect(() => {
               const fetchData = async () => {
                   try {
                       const response = await fetch('http://localhost:8080/getAllSellers');
                       if (!response.ok) {
                           throw new Error('Failed to fetch data');
                       }
                       const jsonData = await response.json();
                       console.log(jsonData);
                       setSellerData(jsonData);
                   } catch (error) {
                       console.error('Error fetching data:', error);
                   }
               };

               fetchData();
        }, []);


    return (
        <div className="total">
            
            <h1>Find A {props.user}</h1>
            <br />

            <div className = "scroll">
                <table name="sellerData">
                    <thead>
                        <tr className='headingHover'>
                            {/* <th>{props.user}: </th> */}
                            <th>Forename </th>
                            <th>Surname </th>
                            <th className='smallScreen' >Email </th>
                            <th>Telephone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sellerData.map((details) => {
                            return (
                                <tr key={details.id}>
                                    <td>{details.firstName}</td>
                                    <td>{details.lastName}</td>
                                    <td className='smallScreen'>{details.email}</td>
                                    <td>{details.telephone}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
}

export default DisplaySellers;