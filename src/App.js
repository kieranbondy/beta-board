import logo from './logo.svg';
import './App.css';
import Area from './components/Area/Area';
import Climb from './components/Climb/Climb';
function App() {
  return (
    <div className="App">
      <Area></Area>
      {/* <Climb difficulty={'red'} holdColor={'yellow'} beta={'https://www.youtube.com/embed/JXTSk28Ss5A'}></Climb> */}
    </div>
  );
}

export default App;
