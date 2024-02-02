import logo from './logo.svg';
import './App.css';
import Top from './component/topnav/Top.js';
import Menubar from './component/menubar/Menubar';
// import Owldemo1 from './component/slider/Slider';
import Courses from './component/courses/Courses';
import About from './component/About/About';
import Counter from './component/counter/Counter';
import Madam from './component/madam/Madam';
import Creative from './component/creative/Creative';
function App() {
  return (
    <div className="App">
      <Top></Top>
      <Menubar></Menubar>
      {/* <Owldemo1></Owldemo1> */}
      <Courses></Courses>
      <About></About>
      <Counter></Counter>
      <Madam></Madam>
      <Creative></Creative>
        
    </div>
  );
}

export default App;
