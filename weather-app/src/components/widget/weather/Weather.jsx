import DateAndLoc from "../../base/dateAndLoc/DateAndLoc";
import Search from "../../base/search/Search";
import TodayWeather from "../../base/todayWeather/TodayWeather";
import WeatherDetails from "../../base/weatherDetails/WeatherDetails";

const Weather = () => {
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

        </div>
      </div>
    </div>
  );
};

export default Weather;
