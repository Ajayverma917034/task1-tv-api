import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home';
import Details from './component/Details';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/show/:id' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
