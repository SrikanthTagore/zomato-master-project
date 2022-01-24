import React,{ useEffect } from "react";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import Delivery from "../Components/Delivery/index";
import Brand from "../Components/Delivery/Brand";
import Dining from "../Components/Dining/index";
import NightLife from "../Components/NightLife/index";

// redux actions
import { getRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";

const HomePage = () => {
  const {type} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurant());
  }, []);

  return (
    <>
      <div className="my-5">
          {type === "delivery" && <Brand />}
          {type === "delivery" && <Delivery />}
          {type === "dining" && <Dining />}
          {type === "night" && <NightLife />}
      </div>
    </>
  );
}

export default HomePage;
