import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<Register />} path="/register"></Route>
          <Route element={<Home />} path="/"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
