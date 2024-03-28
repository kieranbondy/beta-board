import logo from './logo.svg';
import './App.css';
import Area from './components/Area/Area';
import Climb from './components/Climb/Climb';
import Map from './components/Map/Map';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([{
    path:'/',
    element: <Map></Map>,
    errorElement: <div>404 Not Found</div>
  },
  {
    path:'/climbs',
    element:<Area></Area>
    
  }
])
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <Area></Area> */}
      {/* <Climb difficulty={'red'} holdColor={'yellow'} beta={'https://www.youtube.com/embed/JXTSk28Ss5A'}></Climb> */}
    </div>
  );
}

export default App;
