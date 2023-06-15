import About from "../pages/Main/About/About";
import Contact from "../pages/Main/Contact/Contact";
import Blog from "../pages/Main/Blog/Blog";
import Shop from "../pages/Main/Shop/Shop";
import Home from "../pages/Main/Home/Home";
import MainRoot from "../pages/Main/MainRoot";
import NotFound from "../pages/Main/NotFound";

export const ROUTES = [
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
                path:'*',
                element: <NotFound/>
            }
        ]
    }
]