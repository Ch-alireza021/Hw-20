import axios from "axios";
const API_KEY = "45defef94c3a437db8790940231511";


export async function getWeather(locait){
    try{
        const response=await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${locait}&days=4`);
        const data=response.data;
        return data;
    }catch (error) {
        console.error(error);
        throw error;
      }
}

