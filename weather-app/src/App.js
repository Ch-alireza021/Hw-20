
import './App.css';
import DateAndLoc from './components/base/dateAndLoc/DateAndLoc';
import Search from './components/base/search/Search';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#272E37] flex flex-col items-center">
      <Search/>
      <DateAndLoc day={"wedensday"} date={11}  loc={"tehran"} />
    </div>
  );
}

export default App;
