const WeatherDetails = ({Pre,Hum,Wind}) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="w-full flex justify-between">
        <span>PRECIPITATION</span>
        <span>{Pre}</span>
      </div>
      <div className="w-full flex justify-between">
      <span >HUMIDITY</span>
      <span>{Hum}</span>
      </div>
      <div className="w-full flex justify-between">
      <span>WIND</span>
      <span>{Wind}</span>
      </div>
    </div>
  );
};

export default WeatherDetails;
