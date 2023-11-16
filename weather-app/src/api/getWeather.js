import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL="http://api.weatherapi.com/v1/current.json?key=45defef94c3a437db8790940231511";
// const BASE_URL=" http://api.weatherapi.com/v1";

export async function getWeather(locait){
    try{
        const response=await axios.get(`${BASE_URL}&q=${locait}&days=7`);
        const data=response.data;
        return data;
    }catch (error) {
        console.error(error);
        throw error;
      }
}

// export function useWeatherData(){
//     const [weather,setWeather]= useState([])
//     useEffect(() => {
//         getWeather()
//           .then(data=> {setWeather(data);
//             console.log(data)})
//           .catch()
//         }, []);
//         return {weather}
// }