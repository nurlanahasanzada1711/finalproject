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
import Services from "../pages/Admin/Services/Services";
import AddServices from "../pages/Admin/AddServices/AddServices";
import EditServices from "../pages/Admin/EditServices/EditServices";
import Products from "../pages/Admin/Products/Products";
import EditProducts from "../pages/Admin/EditProducts/EditProducts";
import AddProducts from "../pages/Admin/AddProducts/AddProducts";
import Employees from "../pages/Admin/Employees/Employees";
import EditEmployees from "../pages/Admin/EditEmployees/EditEmployees";
import AddEmployees from "../pages/Admin/AddEmployees/AddEmployees";
import BlogDetails from "../pages/Main/Blog/BlogDetails";
import Users from "../pages/Admin/Users/Users";
import ShopDetails from "../pages/Main/Shop/ShopDetails";
import ServicePage from "../pages/Main/Service/ServicePage";

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
                path:'/service',
                element: <ServicePage/>
            },
            {
                path:'/shop/detail/:id',
                element: <ShopDetails/>
            },
            {
                path:'/blog',
                element: <Blog/>
            },
            {
                path:'/blog/detail/:id',
                element: <BlogDetails/>
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
                element:<AdminLogin/>
            },
            {
                path:'home',
                element: <AdminHome/>
            },
            {
                path:'services',
                element: <Services/>
            },
            {
                path:'addservices',
                element: <AddServices/>
            },
            {
                path:'services/edit/:id',
                element: <EditServices/>
            },
            {
                path:'products',
                element: <Products/>
            },
            {
                path:'products/edit/:id',
                element: <EditProducts/>
            },
            {
                path:'addproducts',
                element: <AddProducts/>
            },
            {
                path:'employees',
                element: <Employees/>
            },
            {
                path:'addemployees',
                element: <AddEmployees/>
            },
            {
                path:'employees/edit/:id',
                element: <EditEmployees/>
            },
            {
                path:'users',  
                element: <Users/>
            },
        ]
    }
]