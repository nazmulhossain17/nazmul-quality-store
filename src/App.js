import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage'
import About from "./Pages/About";
import Contact from './Pages/Contact';
import Policy from "./Pages/Policy";
import Pagenotfound from "./Pages/Pagenotfound";
import PrivateRoute from "./components/Routes/Private";
import Dashboard from "./Pages/user/Dashboard";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import Register from "./Pages/Auth/Register";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import Login from './Pages/Auth/Login/Login';
import CreateCategory from "./Pages/Admin/CreateCategory/CreateCategory";
import CreateProduct from "./Pages/Admin/CreateProduct/CreateProduct";
import Users from "./Pages/Admin/Users/Users";
import Profile from "./Pages/Admin/Users/Profile/Profile";
import Orders from "./Pages/Admin/Users/Orders/Orders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/orders" element={<Orders />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={<Users />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
