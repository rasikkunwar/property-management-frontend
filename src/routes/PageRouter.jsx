import { Routes, Route } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm/LoginForm";
import SignUp from "../components/Auth/SignUp/SignUp";
import PropertyDetail from "../components/Properties/PropertyDetail";
import MyListings from "../components/Listings/ListUsers/MyListings";
import Home from "../pages/Home";
import RequireAuth from "../components/Auth/RequireAuth";
export default function PageRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="property/:id" element={<PropertyDetail />}></Route>
      <Route path="login" element={<LoginForm />}></Route>
      <Route path="sign-up" element={<SignUp />}></Route>
      <Route path="my-listings" element={<RequireAuth><MyListings /></RequireAuth>} ></Route>

    </Routes>
  );
}
