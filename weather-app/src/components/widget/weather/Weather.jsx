
import { getWeather, useWeatherData, weatherData } from "../../../api/getWeather";
import DateAndLoc from "../../base/dateAndLoc/DateAndLoc";
import DaysCart from "../../base/daysCart/DaysCart";
import Search from "../../base/search/Search";
import TodayWeather from "../../base/todayWeather/TodayWeather";
import WeatherDetails from "../../base/weatherDetails/WeatherDetails";
import { useEffect, useState } from "react";
const Weather = () => {

  const [weather,setWeather]= useState([]);
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const [day,setDay]= useState([])
  const [date,setDate]= useState([])

function creatDay(date){
const day=new Date(date).getDay();
const month = (new Date(date)).toLocaleString('de-DE', { year: 'numeric', month: 'long', day: 'numeric'});
setDate(month)
console.log(month);
setDay(day)
}



    useEffect(() => {
        getWeather()
          .then(data=> {setWeather(data);
            // setDay(data.location.localtime)
            creatDay(data.location.localtime)
            console.log(data);
            // const time=weather?.localtime
          })
          .catch()
        }, []);

       const WC=weather.current;

        return (
    <div>
      <Search />
      <div className="weather__container">
        <div className="backGround left">
             <DateAndLoc day={weekday[day]} date={date}  loc={weather.location?.name} />
             <TodayWeather temp={WC?.temp_c} weather={WC?.condition.text}/>
        </div>
        <div className="right ">
           <WeatherDetails Pre={`${WC?.precip_in} %`} Hum={`${WC?.humidity} %`} Wind={`${WC?.wind_kph
} km/h`} />
           <DaysCart  temp={"30 *c"} day={"Tue"} active={"active"}  />
        </div>
      </div>
    </div>
  );
};

export default Weather;
