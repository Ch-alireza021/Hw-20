const Search = ({handleSearch}) => {

  // function search(){
  //   handleSearch()
  // }
  return (
    <div className="w-[1000px] text-[20px] font-semibold text-white my-[47px]">
      <input
        type="search"
        placeholder="search city"
        className="w-full px-7 border-[#E7E7E7] border-2 rounded-[17px] h-[79px] outline-none bg-transparent"
        onChange={(e)=> handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
