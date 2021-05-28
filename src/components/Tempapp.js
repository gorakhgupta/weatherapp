import React, { useEffect, useState } from 'react';
import './css/style.css';
const Tempapp = ()=>{
const [ outcity , setoutCity]=useState(null);
const [search, setSearch] = useState("Gorakhpur");


useEffect(()=>{
    const fetchApi = async ()=>{
        const url = `http://api.openweathermap.org/data/2.5/weather?q= ${search}&units=metric&appid=72c1d9f2a0dbed7695f8c0cac1854c38`; 
        const response = await fetch(url);
        const resJson = await response.json();
        // console.log(resJson.main.temp);
        setoutCity(resJson.main);
    };
fetchApi();
},[search]);




    return (
        <>
        <div className="box">
        <h1>GKG</h1>
        <div className="inputData">
        <input
        type="search"
        className="inputField"
        onChange={(e)=>{
            setSearch(e.target.value);


        }}
        />
        </div>
        { !outcity ? <p>No data found</p> :
        (<div>
        <div className="info">
        <h2 className="location">
        <i className="fas fa-street-view"></i>
         {search}  
        </h2>
        <h1 className="temp">{outcity.temp} Cel</h1>
        <h3 className="tempmin_max">Min: {outcity.temp_min} Cel | Max : {outcity.temp_max} Cel</h3>

        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three "></div>
        </div>
        ) 
        }
        </div>
        </>

    );
}
export default Tempapp;
