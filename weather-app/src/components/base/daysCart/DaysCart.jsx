

const DaysCart = ({img,day,temp,active}) => {
  return (
    <div className={`mt-[7.8vh] flex flex-col gap-4 ${active} items-center justify-center`}>
        <span>{img}</span>
        <span>{day}</span>
        <span>{temp}</span>
    </div>
  )
}

export default DaysCart;