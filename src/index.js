import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import Home from "./View/Home/Home"
// import Categories from './View/CategoriesList/Categories';
// import Rooms from './View/Rooms/Rooms';
import Product from './View/Product/Product';
import InfoCard from './View/ProductInfo/InfoCard';
// import MoreInfo from './View/MoreInfo/MoreInfo';
// import Payment from './View/Payment/Payment';
import {Cart} from './View/AddCart/Cart';
import History from './View/History/History';
import SignUp from './View/SignUp/SignUp';
import SignIn from './View/SignIn/SignIn';
import Profile from './View/Profile/Profile';
import Service from './View/Services/Service';
import About from './View/About/About';
// import Contact from './View/Contact/Contact';


// import Navbar from './Component/Home/Navbar/Navbar';







const routes = createBrowserRouter(
  [
    {
    path: "/",
    element: <Home />
  },
  {
    path: "/product",
    element: <Product />
  },
  {
    path: "/product/:id",
    element: <InfoCard />
  },
  
  {
    path: "/addToCart",
    element: <Cart />
  },
  {
    path: "/productHistory",
    element: <History />
  },
  {
    path: "/signUp",
    element: <SignUp />
  },
  {
    path: "/signIn",
    element: <SignIn />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/services",
    element: <Service />
  },
  {
    path: "/about",
    element: <About />
  },
  
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <Navbar/> */}
    <RouterProvider router={routes} />
  </>
);