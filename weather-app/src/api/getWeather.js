import axios from "axios";

const BASE_URL="http://api.weatherapi.com/v1/current.json?key=45defef94c3a437db8790940231511";
// const BASE_URL=" http://api.weatherapi.com/v1";

export async function getWeather(){
    try{
        const response=await axios.get(`${BASE_URL}&q=Tehran`);
        const data=response.data;
        return data;
    }catch (error) {
        console.error(error);
        throw error;
      }
}

