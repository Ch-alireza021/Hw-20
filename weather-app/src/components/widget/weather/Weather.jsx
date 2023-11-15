
import { getWeather } from "../../../api/getWeather";
import DateAndLoc from "../../base/dateAndLoc/DateAndLoc";
import DaysCart from "../../base/daysCart/DaysCart";
import Search from "../../base/search/Search";
import TodayWeather from "../../base/todayWeather/TodayWeather";
import WeatherDetails from "../../base/weatherDetails/WeatherDetails";
import { useEffect, useState } from "react";
const Weather = () => {

  const [weather,setWeather]= useState("")

    useEffect(() => {
        getWeather()
          .then(data=> setWeather(data))
          .catch()
        }, []);

        
        return (
    <div>
      <Search />
      <div className="weather__container">
        <div className="backGround left">
             <DateAndLoc day={"wedensday"} date={11}  loc={"tehran"} />
             <TodayWeather temp={"29 *C"} weather={"sunny"}/>
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
