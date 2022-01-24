import React,{ useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";
import CheckoutLayoutHOC from "./HOC/Checkout.HOC";

import HomePage from "./pages/Home";
import Checkout from "./pages/Checkout";
import Overview from "./pages/Overview";
import OrderOnline from "./pages/OrderOnline";
import Reviews from "./pages/Reviews";
import Menu from "./pages/Menu";
import Photos from "./pages/Photos";
import RedirectRestaurant from "./pages/Redirect";
import GoogleAuth from "./pages/GoogleAuth";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// redux action
import { getMyself } from "./Redux/Reducer/User/user.action";

// axios global settings
if (localStorage.zomatoUser) {
  const { token } = JSON.parse(localStorage.zomatoUser);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}


function App() {
  return (
    <>
        <Route path="/" exact>
          <Redirect to="/delivery" />
        </Route>
        <Route path="/restaurant/:id" exact component={RedirectRestaurant} />

        <HomeLayoutHOC path="/:type" exact component={HomePage} />

        <HomeLayoutHOC path="/google/:token" exact component={GoogleAuth} />
        <RestaurantLayoutHOC path="/restaurant/:id/overview" exact component = {Overview} />
        <RestaurantLayoutHOC path="/restaurant/:id/order-online" exact component = {OrderOnline} />
        <RestaurantLayoutHOC path="/restaurant/:id/reviews" exact component = {Reviews} />
        <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component = {Menu} />
        <RestaurantLayoutHOC path="/restaurant/:id/photos" exact component = {Photos} />
        <CheckoutLayoutHOC path="/checkout/orders" exact component = {Checkout} />
    </>
  );
}

export default App;
