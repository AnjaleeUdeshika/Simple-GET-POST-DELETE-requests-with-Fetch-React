import React, { useState } from 'react';
import { v4 as uuid } from "uuid";

function AddCountry() {

  const [ countryName, setCountryName ] = useState("");
  const [ currency, setCurrency ] = useState("");
  const [ population, setPopulation ] = useState("");
  const [ flagUrl, setFlagUrl ] = useState("");
  const [ gdp, setGdp ] = useState("");


  const handleSubmit = (e) => {

    e.preventDefault();

    //auto generated id
    const id = uuid();


    //bind the values to the item
    const item = { id, countryName, currency, population, flagUrl, gdp };

    console.log(item);

  //fetch values
  fetch("http://localhost:3003/item", {
      method: "POST",
      headers: {"Content-Type": 'application/json' },
      body: JSON.stringify(item),

  }).then(function (response) {
    console.log(response);
    return response.json();
  });

  };

return (
    <div className="AddCountry">

      {/*Add form*/}
      <form onSubmit ={handleSubmit} >
        Country Name
        <input
          type = "text"
          value = {countryName}
          placeholder = "Enter Country Name"
          onChange = {(e) => setCountryName(e.target.value)}
        />

        Currency
        <input
          type = "text"
          value = {currency}
          placeholder = "Enter Currency"
          onChange = {(e) => setCurrency(e.target.value)}
        />

        Population
        <input
          type = "text"
          value = {population}
          placeholder = "Enter Population"
          onChange = {(e) => setPopulation(e.target.value)}
        />

        Flag
        <input
          type = "text"
          value = {flagUrl}
          placeholder = "Paste image address here"
          onChange = {(e) => setFlagUrl(e.target.value)}
        />

        GDP
        <input
          type = "text"
          value = {gdp}
          placeholder = "Enter GDP value"
          onChange = {(e) => setGdp(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddCountry;
