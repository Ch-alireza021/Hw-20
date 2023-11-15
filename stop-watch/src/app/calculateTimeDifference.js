export const calculateTimeDifference = (timeInput1, timeInput2) => {
    const time1=isNaN(timeInput1) ? new Date(`1970-01-01T${timeInput1}Z`) :timeInput1
    const time2=isNaN(timeInput2) ? new Date(`1970-01-01T${timeInput2}Z`) :timeInput2
  
  
    const timeDiff = Math.abs(time1 - time2);
    const hours = Math.floor(timeDiff / 3600000)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((timeDiff % 3600000) / 60000)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((timeDiff % 60000) / 1000)
      .toString()
      .padStart(2, "0");
    const milliseconds = Math.floor(((timeDiff % 1000) / 10)).toString().padStart(2, "0");
    return {
      hours,
      minutes,
      seconds,
      milliseconds,
    };
  };