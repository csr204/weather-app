const search=document.getElementById("search")
const btn=document.getElementById("searchbtn")
const details=document.querySelector(".card")
const temp=document.querySelector(".temperature")
const min=document.querySelector(".min")
const max=document.querySelector(".max")
const humidity=document.querySelector(".humidity")
const wind=document.querySelector(".wind")
const load=document.querySelector(".load")
const errorcard=document.querySelector(".error")
import {options} from '../src/options'

btn.addEventListener("click",async()=>{  
  errorcard.style.opacity=0
  load.style.scale=1;
  details.style.scale=0
  try {
    const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${search.value}`, options);
    const result = await response.json();
    load.style.scale=0;
    if(result.temp===undefined){
      throw new Error("error")
    }
    search.value=""
    details.style.scale=1
    // console.log(result)
    search.value=""
    temp.innerHTML=`<p>Temperature</p>
  <h2>${result.temp}<sup>o</sup>c</h2>`
    min.innerHTML=`<p>Min-Temperature</p>
    <h2>${result.min_temp}</h2>`
    max.innerHTML=`<p>Max-Temperature</p>
    <h2>${result.max_temp}</h2>`
    humidity.innerHTML=`<p>Humidity</p>
    <h2>${result.humidity}%</h2>`
    wind.innerHTML=`<p>Wind speed</p>
    <h2>${result.wind_speed} m/s</h2>
    <p>wind-degree</p>
    <h2>${result.wind_degrees}</h2>`
  } catch (error) { 
    errorcard.style.opacity=1
  }
})

