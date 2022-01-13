import React from 'react';
import { useState , useEffect } from 'react';
//import { v4 as uuid } from "uuid";


import "../App.css";

function UpdateCountry({ children }){

    //set usestate for inputs
    const [ id , setId ] = useState(children.id);
    const [ countryName , setCountryName ] = useState(children.countryName);
    const [ currency , setCurrency ] = useState(children.currency);
    const [ population , setPopulation ] = useState(children.population);
    const [ flagUrl , setFlagUrl ] = useState(children.flagUrl);
    const [ gdp , setGdp ] = useState(children.gdp);


   console.log(children.countryName)
    //click submit
    const handleSubmit = (e) => {
        //e.preventDefault();
       // const id = uuid();

        //bind data to the item
        const item = {id, countryName, currency, population, flagUrl, gdp};
        console.log(item);

         //fetch data
         fetch("http://localhost:3003/item/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
          }).then(() => {
            console.log(item);
          });
        
    };

        return (
            <div>
                <h1>Update Country Details</h1>

                {/*Update form*/}
                <form onSubmit ={handleSubmit} >
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Country Name</th>
                                <th>Currency</th>
                                <th>Population</th>
                                <th>GDP</th>
                                <th>Flag Url</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type = "text"
                                        value = {children.id}
                                        readOnly= "readOnly"
                                        onChange = {(e) => setId(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type = "text"
                                        value = {children.countryName}
                                        placeholder = "Enter Country Name"
                                        onChange = {(e) => setCountryName(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type = "text"
                                        value = {children.currency}
                                        placeholder = "Enter Currency"
                                        onChange = {(e) => setCurrency(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type = "text"
                                        value = {children.population}
                                        placeholder = "Enter Population"
                                        onChange = {(e) => setPopulation(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type = "text"
                                        value = {children.flagUrl}
                                        placeholder = "Paste image address here"
                                        onChange = {(e) => setFlagUrl(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type = "text"
                                        value = {children.gdp}
                                        placeholder = "Enter GDP value"
                                        onChange = {(e) => setGdp(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <button type="submit">Save</button>
                                </td>
                                <td>
                                <button type="submit">Cancel</button>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                    
                </form>
                
            </div>
        );
    
}

export default UpdateCountry;
