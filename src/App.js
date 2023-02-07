import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import PageRouter from "./routes/PageRouter";
import Footer from "./components/Footer/Footer";
import CustomToastBar from "./components/Toaster/CustToastBar";
import { useDispatch, useSelector } from 'react-redux';
import AuthService from './services/AuthService';
import { useEffect } from "react";
import {fetchUserDetail} from './store/auth/auth';
function App() {
  const isAuthenticated = AuthService.isAuthenticated();
  const dispatch = useDispatch()
  useEffect(()=>{
    isAuthenticated && dispatch(fetchUserDetail())
  })
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <CustomToastBar />
      <PageRouter></PageRouter>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
