import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import SignUp from "./components/Forms/SignUp/SignUp";
import ListUser from "./components/Tables/ListUsers/ListUsers";
import ListUsers from "./components/Tables/ListUsers/ListUsers";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import PageRouter from "./routes/PageRouter";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <PageRouter></PageRouter>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
