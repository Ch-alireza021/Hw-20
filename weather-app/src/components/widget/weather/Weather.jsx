import {
  getWeather,
} from "../../../api/getWeather";
import DateAndLoc from "../../base/dateAndLoc/DateAndLoc";
import DaysCart from "../../base/daysCart/DaysCart";
import Search from "../../base/search/Search";
import TodayWeather from "../../base/todayWeather/TodayWeather";
import WeatherDetails from "../../base/weatherDetails/WeatherDetails";
import { useEffect, useState } from "react";
const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [day, setDay] = useState([]);
  const [date, setDate] = useState([]);
  const [locait, setLocait] = useState("Tehran");
  const [details, setDetails] = useState({});
  const WC = weather.current;

  function creatDay(date) {
    const newDate = new Date(date);
    const dayLong = newDate.toLocaleString("en-us", { weekday: "long" });
    const dayShort = newDate.toLocaleString("en-us", { weekday: "short" });
    const todayDate = new Date(date).toLocaleString("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setDate(todayDate);
    setDay({ dayLong, dayShort });
  }

  useEffect(() => {
    getWeather(locait)
      .then((data) => {
        if (data) {
          setWeather(data);
          creatDay(data.location.localtime);
        }
      })
      .catch((error) => {
        console.log("error");
      });
  }, [locait]);

  function handleSearch(value) {
    setLocait(value);
  }

useEffect(()=>{
  handleActive();
},[weather])

function handleActive(index=0){
  const hourNow=new Date().getHours();
  const active=index
  const src=weather.forecast?.forecastday[index].hour[hourNow]
  console.log(src);
  const Pre=`${src?.precip_in} %`
  const Hum=`${src?.humidity} %`
  const Wind=`${src?.wind_kph } km/h`
  setDetails({Pre,Hum,Wind,active})
}
  return (
    <div className="max-w-[1700px]">
      <Search handleSearch={handleSearch} />
      <div className="weather__container">
        <div className="backGround left">
          <DateAndLoc
            day={day.dayLong}
            date={date}
            loc={weather.location?.name}
          />
          <TodayWeather
            temp={WC?.temp_c}
            weather={WC?.condition.text}
            src={WC?.condition.icon}
          />
        </div>
        <div className="right ">
          <WeatherDetails
            details1={details}
          />
         <div className="flex">
         <DaysCart
            forecast={weather.forecast?.forecastday}
            handleActive={handleActive}
            details1={details}
          />
         </div>
        </div>
      </div>
    </div> 
  );
};

export default Weather;
