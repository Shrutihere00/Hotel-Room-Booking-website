import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import List from './pages/list/List';
import SingleHotelPage from './pages/singleHotelPage/SingleHotelPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<SingleHotelPage />}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
 