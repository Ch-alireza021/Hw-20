

const DaysCart = ({forecast=[],handleActive,details1}) => {
 return forecast.map((item,index)=>{
  const newDate = new Date(item.date);
   const dayShort = newDate.toLocaleString("en-us", { weekday: "short" });
    return (
      <div onClick={()=>handleActive(index)} className={`mt-[7.8vh] flex flex-col gap-4 ${details1.active===index ? "active":"notActive"} items-center justify-center`} key={index}>
          <span><img src={item.day.condition.icon} alt="" /></span>
          <span>{dayShort}</span>
          <span>{item.day.avgtemp_c}</span>
      </div>
    )
  })
}

export default DaysCart;