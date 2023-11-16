

const DateAndLoc = ({day,date,loc}) => {
  return (
    <div className="flex flex-col gap-4 text-white">
        <span className="text-[37px] font-bold">{day}</span>
        <span className="text-[22px] font-medium">{date}</span>
        <span className="flex font-[20px] font-semibold"><img src="./icon/Location.png" alt="location icon" />{loc}</span>
    </div>
  )
}

export default DateAndLoc;