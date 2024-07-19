import './App.css';
import Home from './pages/Home';
import Count from './pages/Count';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/users/:id' element={<Count />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
