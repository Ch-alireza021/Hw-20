

const TodayWeather = ({temp,weather}) => {
  return (
    <div className="flex flex-col text-white font-bold font-bold ">
        <span></span>
        <span className="text-[50px]  "> {temp} </span>
        <span className="text=[30px]  ">{weather} </span>
    </div>
  )
}

export default TodayWeather