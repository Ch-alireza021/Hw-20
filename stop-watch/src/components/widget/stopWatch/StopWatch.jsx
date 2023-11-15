// StopWatch.js
import React, { useState, useEffect } from "react";
import Button from "../../base/button/Button";
import { calculateTimeDifference } from "../../../app/calculateTimeDifference";
import Lap from "../laps/Lap";



export default function StopWatch() {
  const [time, setTime] = useState(false);
  const [timeStop, setTimeStop] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [hours, setHours] = useState("00");
  const [miliSeconds, setMiliSeconds] = useState("00");
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        const timeNow = new Date().getTime();
        const differenceTime = calculateTimeDifference(time, timeNow);
        setMiliSeconds(differenceTime.milliseconds);
        setSeconds(differenceTime.seconds);
        setMinutes(differenceTime.minutes);
        setHours(differenceTime.hours);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
	if(!time){
		const startStopWatch = new Date().getTime();
		setTime(startStopWatch);
	}else{
		const Now = new Date().getTime();
		setTime(prev=>prev+(Now-timeStop))
	}
	setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
	setTimeStop(new Date().getTime());
  };

  const handleLap = () => {
    const lapTime = hours + ":" + minutes + ":" + seconds + "." + miliSeconds;
	if(isRunning){
		setLaps((prevLaps) => [...prevLaps, lapTime]);
	}
  };

  const handleReset = () => {
    setIsRunning(false);
    setMiliSeconds("00");
    setSeconds("00");
    setMinutes("00");
    setHours("00");
    setLaps([]);
    setTime(false)
  };

  return (
    <div className="flex flex-col items-center gap-10 mt-7">
      <div className="text-[48px] w-fit">
        {hours} : {minutes} : {seconds} . {miliSeconds}
      </div>
          <div className="w-full flex justify-evenly"  disabled={isRunning}>
           
            <Button
              backGround={"bg-[#18a71e]"}
              text={"START"}
              onBtn={handleStart}
            />
            <Button
              backGround={"bg-[#187CA7]"}
              text={"LAP"}
              onBtn={handleLap}
            />
            <Button
              backGround={"bg-[#A71818]"}
              text={isRunning ?"STOP":"RESET"}
              onBtn={isRunning ? handleStop :handleReset}
            />
          </div>
          <Lap laps={laps} />
     
    </div>
  );
}
