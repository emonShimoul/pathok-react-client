import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import AddBooks from './Pages/Dashboard/AddBooks/AddBooks';
import Home from './Pages/Home/Home/Home';
import ProductDetails from './Pages/Home/ProductDetails/ProductDetails';
import Login from './Pages/Login/Login/Login';
import ProtectedRoute from './Pages/Login/ProtectedRoute/ProtectedRoute';
import Register from './Pages/Login/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route element={<Login />} path="/login"></Route>
            <Route element={<Register />} path="/register"></Route>
            <Route element={<ProductDetails />} path="/productDetails"></Route>
            <Route element={<ProtectedRoute><AddBooks /></ProtectedRoute>} path="/addbooks"></Route>
            <Route element={<Home />} path="/"></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
