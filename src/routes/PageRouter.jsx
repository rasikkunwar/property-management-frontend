import { Routes, Route } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm/LoginForm";
import SignUp from "../components/Auth/SignUp/SignUp";
import PropertyDetail from "../components/Properties/PropertyDetail";
import Home from "../pages/Home";
import AddProperty from "../components/AddProperty/AddProperty";
import MyListings from "../components/Listings/MyListings/MyListings";
import RequireAuth from "../components/Auth/RequireAuth";
import Application from "../components/Customer/Application/Application";
import Favorite from "../components/Customer/Favorite/Favorite";
import MyProperties from "../components/Owner/MyProperties/MyProperties";
import MyPropertyOffers from "../components/Owner/MyPropertyOffers/MyPropertyOffers";
export default function PageRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="property/:id" element={<PropertyDetail />}></Route>
      <Route path="login" element={<LoginForm />}></Route>
      <Route path="sign-up" element={<SignUp />}></Route>
      <Route path="my-listings" element={<RequireAuth><MyListings/></RequireAuth>} ></Route>
      <Route path="my-applications" element={<RequireAuth><Application/> </RequireAuth>} ></Route>
      <Route path="my-favorites" element={<RequireAuth><Favorite/> </RequireAuth>} ></Route>
      <Route path="my-properties" element={<RequireAuth><MyProperties /></RequireAuth>} ></Route>
      <Route path="my-applications" element={<RequireAuth><Application /> </RequireAuth>} ></Route>
      <Route path="add-property" element={<RequireAuth><AddProperty /></RequireAuth>} />
      <Route path="properties-offers" element={<RequireAuth><MyPropertyOffers /></RequireAuth>} />
      <Route path="/update-property/:propertyId" element={<RequireAuth><AddProperty /></RequireAuth>} />
    </Routes>
  );
}
