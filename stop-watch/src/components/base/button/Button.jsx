 const Button = ({backGround,text,onBtn}) => {
 
    return (
      <div>
          <button onClick={onBtn}  className={`${backGround} rounded-full w-[120px] h-[120px]`}>
              {text}
          </button>
      </div>
    )
  }

  export default Button;