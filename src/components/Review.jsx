import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Card from "./Card";
import axios from "axios";
import Spinner from "./Spinner";

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const options = {
    method: "GET",
    url: "https://testimonial.p.rapidapi.com/api",
    headers: {
      "X-RapidAPI-Key": "e2ee978627msh525c8a4688a74c7p1c296cjsnbdb7678e8e31",
      "X-RapidAPI-Host": "testimonial.p.rapidapi.com",
    },
  };

  if (reviews.length === 0) return <Spinner />;

  axios
    .request(options)
    .then(function (response) {
      setReviews(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  const rev = reviews.map((review) => {
    return (
      <Card
        key={review.id}
        avatar={review.avatar}
        designation={review.designation}
        message={review.message}
        name={review.name}
      />
    );
  });
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={4100}
    >
      {rev}
    </Carousel>
  );
}
