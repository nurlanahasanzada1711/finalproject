import About from "../pages/Main/About/About";
import Contact from "../pages/Main/Contact/Contact";
import Blog from "../pages/Main/Blog/Blog";
import Shop from "../pages/Main/Shop/Shop";
import Home from "../pages/Main/Home/Home";
import MainRoot from "../pages/Main/MainRoot";
import NotFound from "../pages/Main/NotFound";


import AdminLogin from "../pages/Admin/AdminLogin/Login";
import AdminHome from "../pages/Admin/AdminHome/AdminHome";
import AdminRoot from "../pages/Admin/AdminRoot";
import RegisterPage from "../pages/Main/RegisterPage/RegisterPage";
import LoginPage from "../pages/Main/LoginPage/LoginPage";
import Users from "../pages/Main/Users/Users";
import Services from "../pages/Admin/Services/Services";
import AddServices from "../pages/Admin/AddServices/AddServices";

export const ROUTES = [

     //Main Root

    {
        path:'/',
        element: <MainRoot/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/shop',
                element: <Shop/>
            },
            {
                path:'/blog',
                element: <Blog/>
            },
            {
                path:'/contact',
                element: <Contact/>
            },
            {
                path:'/register',
                element: <RegisterPage/>
            },
            {
                path:'/login',
                element: <LoginPage/>
            },
            {
                path:'/users',  
                element: <Users/>
            },
            {
                path:'*',
                element: <NotFound/>
            }
        ]
    },

     //Admin Root
     {
        path: '/admin',
        element: <AdminRoot/>,
        children: [
            {
                path:'',
                element:<AdminHome/>
            },
            {
                path:'login',
                element: <AdminLogin/>
            },
            {
                path:'services',
                element: <Services/>
            },
            {
                path:'addservices',
                element: <AddServices/>
            },
        ]
    }
]