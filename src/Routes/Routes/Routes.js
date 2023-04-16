import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from '../../Layout/Main';
import About from '../../Pages/Home/About/About';
import Contact from "../../Pages/Home/Contact/Contact";
import Policy from "../../Pages/Home/Policy/Policy";
import Pagenotfound from "../../Pages/Home/Pagenotfound/Pagenotfound"
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Dashboard from "../../Pages/user/Dashboard";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '*',
                element: <Pagenotfound></Pagenotfound>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/policy',
                element: <Policy></Policy>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    }
]);

export default router;