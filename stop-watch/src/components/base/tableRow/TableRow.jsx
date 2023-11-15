 const TableRow = ({lap,lapTime}) => {
    const backGround= lap % 2 !==0 ? "bg-[#187CA7]":""
  
    return (
      <tr className={backGround }  key={lap}>
        <td className="px-5 ">Lap {lap}</td>
        <td>{lapTime}</td>
      </tr>
    );
  };

  export default TableRow;