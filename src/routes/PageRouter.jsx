import { Routes, Route } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm/LoginForm";
import SignUp from "../components/Auth/SignUp/SignUp";
import PropertyDetail from "../components/Properties/PropertyDetail";
import Home from "../pages/Home";
import AddProperty from "../components/AddProperty/AddProperty";
import MyListings from "../components/Listings/MyListings/MyListings";
export default function PageRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="property/:id" element={<PropertyDetail />}></Route>
      <Route path="login" element={<LoginForm />}></Route>
      <Route path="sign-up" element={<SignUp />}></Route>
      <Route path="my-listings" element={<MyListings />}></Route>
      <Route path="add-property" element={<AddProperty />} />

    </Routes>
  );
}
