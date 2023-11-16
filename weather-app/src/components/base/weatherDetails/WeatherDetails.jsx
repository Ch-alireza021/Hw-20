const WeatherDetails = ({details1}) => {
  console.log(details1);
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="w-full flex justify-between">
        <span>PRECIPITATION</span>
        <span>{details1?.Pre}</span>
      </div>
      <div className="w-full flex justify-between">
      <span >HUMIDITY</span>
      <span>{details1?.Hum}</span>
      </div>
      <div className="w-full flex justify-between">
      <span>WIND</span>
      <span>{details1?.Wind}</span>
      </div>
    </div>
  );
};

export default WeatherDetails;
