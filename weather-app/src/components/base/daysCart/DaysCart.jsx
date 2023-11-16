

const DaysCart = ({day,temp,active,src}) => {
  return (
    <div className={`mt-[7.8vh] flex flex-col gap-4 ${active} items-center justify-center`}>
        <span><img src={src} alt="" /></span>
        <span>{day}</span>
        <span>{temp}</span>
    </div>
  )
}

export default DaysCart;