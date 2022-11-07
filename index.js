import {rich_countries} from "./MyCountries.js";

rich_countries.map((item,i)=>{
    let Details=`My country name is ${item.country_name}, ${item.GDP}`
    console.log(Details)
})