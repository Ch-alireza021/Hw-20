
import { calculateTimeDifference } from "../../../app/calculateTimeDifference";
import TableRow from "../../base/tableRow/TableRow";



  const Lap = ({ laps }) => {
  const calculateTimeDifferenceBet = (timeString1, index) => {
    const timeString2 = index !== 0 ? laps[index - 1] : "00:00:00.00";
    const differenceTime = calculateTimeDifference(timeString1, timeString2);
    const resultString = `${differenceTime.hours}:${differenceTime.minutes}:${differenceTime.seconds}.${differenceTime.milliseconds}`;
    return resultString;
  };

  return (
    <div>
      <table className="w-[800px]">
        <thead>
          <tr>
            <th className="text-start px-5">Lap</th>
            <th className="text-start">Time</th>
          </tr>
        </thead>
        <tbody>
          {laps.map((lap, index) => (
            <TableRow
              lap={index + 1}
              lapTime={calculateTimeDifferenceBet(lap, index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lap;