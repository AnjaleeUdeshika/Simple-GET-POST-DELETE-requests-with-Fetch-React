import React, { useState, useEffect, Fragment} from 'react';

import AddCountry from './AddCountry';
import UpdateCountry from './UpdateCountry';

function CounntryDetails(){

    //fetch api
    const [data, setData] = useState([]);

    //click add
    const handelAdd = ()=> {
       // console.log("Button is working");
    };

    //set usestate for update
    const [colunmData, setColunmData ] = useState([]);

    //click update
    const handleUpdate = ([colunmData]) => () => {
        setColunmData(colunmData);
        //console.log(colunmData);
    };


    const [ showAddForm, setShowAddForm ] = useState('none');

    // DELETE request using fetch with error handling
    const handleDelete = (id) => () => {

        console.log(id);

    //fetch data  
    fetch('http://localhost:3003/item/' + id, { method: 'DELETE' })
        .then(async response => {
            const isJson = response.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            console.log(response);
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            console.log('Delete successful');
        })
        .catch(error => {
            console.log('There was an error!');
        }).then(
            function () {
              window.location.reload();
            }
          );

    };
    


     //get data from json object
    const getData = () => {
        fetch("http://localhost:3003/item", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        })
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
            setData(myJson);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Country Name</th>
                        <th>Currency</th>
                        <th>Population</th>
                        <th>GDP</th>
                        <th>Flag</th>
                        <th>Flag Url</th>
                    </tr>
                </thead>
                
                <tbody>
                    {data &&
                        data.length > 0 &&
                        data.map((item) => (
                        <tr key={item.id}>
                            <td>{ item.countryName }</td>
                            <td>{ item.currency }</td>
                            <td>{ item.population }</td>
                            <td>{ item.gdp }</td>
                            <td>
                                <img 
                                style={ { width: 100, height: 50}}
                                src={ item.flagUrl } 
                                alt='Flag' />
                            </td>
                            <td>
                            <a href={ item.flagUrl }>
                                Click here for visit Flag
                            </a>
                            </td>
                            <td>
                            <button type="submit" onClick={handleUpdate([item])}>Update</button>
                            </td>
                            <td>
                            <button type="submit" onClick={ handleDelete(item.id) } >Delete</button>
                            </td>
                            
                        </tr>
                        ))}
                </tbody>
            </table>
            
            {/*Add Button*/}
            <button 
            onClick = {() => setShowAddForm("block") }>
                Add
            </button>
                            
            <UpdateCountry>{ colunmData }</UpdateCountry>

          <div style={{ display: {showAddForm}}}><AddCountry /></div>  


        </div>




    );

}
export default CounntryDetails;