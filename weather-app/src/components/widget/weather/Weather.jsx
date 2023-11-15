
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

function creatDay(date){
const day=new Date(date).getDay();
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

       

        return (
    <div>
      <Search />
      <div className="weather__container">
        <div className="backGround left">
             <DateAndLoc day={weekday[day]} date={weather.location?.localtime}  loc={weather.location?.name} />
             <TodayWeather temp={weather.current?.temp_c} weather={"sunny"}/>
        </div>
        <div className="right ">
           <WeatherDetails Pre={"0%"} Hum={"42%"} Wind={"3 Km/h"} />
           <DaysCart  temp={"30 *c"} day={"Tue"} active={"active"}  />
        </div>
      </div>
    </div>
  );
};

export default Weather;
