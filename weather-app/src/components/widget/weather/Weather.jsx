
import { getWeather, useWeatherData, weatherData } from "../../../api/getWeather";
import DateAndLoc from "../../base/dateAndLoc/DateAndLoc";
import DaysCart from "../../base/daysCart/DaysCart";
import Search from "../../base/search/Search";
import TodayWeather from "../../base/todayWeather/TodayWeather";
import WeatherDetails from "../../base/weatherDetails/WeatherDetails";
import { useEffect, useState } from "react";
const Weather = () => {

  const [weather,setWeather]= useState([]);
  const [day,setDay]= useState([]);
  const [date,setDate]= useState([]);
  const [locait,setLocait]= useState("Tehran");
  const WC=weather.current;

function creatDay(date){
  const newDate = new Date(date);
  const dayLong = newDate.toLocaleString('en-us', {weekday: 'long'});
  const dayShort = newDate.toLocaleString('en-us', {weekday: 'short'});
const todayDate = (new Date(date)).toLocaleString('de-DE', { year: 'numeric', month: 'long', day: 'numeric'});
setDate(todayDate)
setDay({dayLong,dayShort})
}




    useEffect(() => {
        getWeather(locait)
          .then(data=> {
            if(data){
              setWeather(data);
              // setDay(data.location.localtime)
              creatDay(data.location.localtime)
              console.log(data);
              console.log(locait);
              // const time=weather?.localtime
            }
          })
          .catch()
        }, [locait]);
    

       function handleSearch(value){
        setLocait(value)
       }

        return (
    <div>
      <Search handleSearch={handleSearch} />
      <div className="weather__container">
        <div className="backGround left">
             <DateAndLoc day={day.dayLong} date={date}  loc={weather.location?.name} />
             <TodayWeather temp={WC?.temp_c} weather={WC?.condition.text} src={WC?.condition.icon}/>
        </div>
        <div className="right ">
           <WeatherDetails Pre={`${WC?.precip_in} %`} Hum={`${WC?.humidity} %`} Wind={`${WC?.wind_kph
} km/h`} />
           <DaysCart  temp={WC?.temp_c} day={day.dayShort} active={"active"}  src={WC?.condition.icon}/>
        </div>
      </div>
    </div>
  );
};

export default Weather;
