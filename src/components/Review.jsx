import React, { useState } from "react";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 
const Review = () => {
  const [reviews, setReviews] = useState([]);
  const options = {
    method: "GET",
    url: "https://testimonial.p.rapidapi.com/api",
    headers: {
      "X-RapidAPI-Key": "e2ee978627msh525c8a4688a74c7p1c296cjsnbdb7678e8e31",
      "X-RapidAPI-Host": "testimonial.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setReviews(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return (
    <div className="review">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Review;
