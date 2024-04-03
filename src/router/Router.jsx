import { createBrowserRouter } from "react-router-dom";


import Home from "../components/pages/Home";
import Services from "../components/pages/Services";
import Products from "../components/pages/Products";
// import ContactUs from "../components/pages/ContactUs";
import SignUp from "../components/pages/SignUp";
import Layout from '../layout/Layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>, 
        children:[
            {
                 element: <Home/>,
                path:"/"
            },
            {
                 element: <Services/>,
                path:"/services"
            },
            {
                 element: <Products/>,
                path:"/products"
            },
            
            {
                 element: <SignUp/>,
                path:"/sign-up"
            },
        ]
    }
])

export default router;