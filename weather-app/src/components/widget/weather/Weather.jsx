import DateAndLoc from "../../base/dateAndLoc/DateAndLoc";
import Search from "../../base/search/Search";
import TodayWeather from "../../base/todayWeather/TodayWeather";
import WeatherDetails from "../../base/weatherDetails/WeatherDetails";

const Weather = () => {
  return (
    <div>
      <Search />
      <div className="flex justify-center">
        <div className="backGround left">
             <DateAndLoc day={"wedensday"} date={11}  loc={"tehran"} />
             <TodayWeather temp={"29 *C"} weather={"sunny"}/>
        </div>
        <div className="right ">
           <WeatherDetails/>

        </div>
      </div>
    </div>
  );
};

export default Weather;
