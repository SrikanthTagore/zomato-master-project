import React,{useState} from "react";
import {TiStarFullOutline} from "react-icons/ti";
import dayjs from "dayjs";

const ReviewCard = (props) => {
  return (
    <>
      <div className="my-3 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXG_uW37PM3Mf9nZjpOCzvPigs102a6jE8Hw&usqp=CAU" alt="avatar" className="w-full h-full rounded-full object-center" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">user</h3>
              <small className="text-gray-500">
                5 Reviews &#8226; 3 Followers
              </small>
            </div>
          </div>
          <button className="text-zomato-400 border border-zomato-400 py-2 rounded-lg px-4">
            Follow
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
              3 <TiStarFullOutline />
            </span>
            <h5 className="font-regular uppercase">
              {props.isRestaurantReview ? "Dining" : "Delivery"}
            </h5>
            <small className="text-gray-500">
              {dayjs(props.createdAt).format("MMM DD, YYYY")}
            </small>
          </div>
          <div className="w-full">
            <p className="w-full text-gray-600 font-light text-base">
              {props.reviewText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
